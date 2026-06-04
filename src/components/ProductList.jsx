// ProductList component - displays products with search, filter, sort
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setCategory, setSortBy } from '../redux/searchSlice';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();

  // Get filter state from Redux
  const { query, category, sortBy } = useSelector(state => state.search);

  // Fetch all products using custom hook
  const { products, loading, error } = useFetchProducts();

  // Get unique categories from products
  const categories = ['all', ...new Set(products.map(p => p.category))];

  // Apply search filter
  let filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  // Apply category filter
  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  // Apply sorting
  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'name') {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  }

  if (loading) return <div className="status-msg">Loading products...</div>;
  if (error)   return <div className="status-msg error">Error: {error}</div>;

  return (
    <div className="product-list-page">
      <h2>All Products</h2>

      {/* ===== SEARCH + FILTER BAR ===== */}
      <div className="filter-bar">

        {/* Search input */}
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={query}
          onChange={e => dispatch(setSearchQuery(e.target.value))}
        />

        {/* Category dropdown */}
        <select
          className="filter-select"
          value={category}
          onChange={e => dispatch(setCategory(e.target.value))}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? '📦 All Categories' : cat}
            </option>
          ))}
        </select>

        {/* Sort dropdown */}
        <select
          className="filter-select"
          value={sortBy}
          onChange={e => dispatch(setSortBy(e.target.value))}
        >
          <option value="default">🔀 Default</option>
          <option value="price-low">💰 Price: Low to High</option>
          <option value="price-high">💰 Price: High to Low</option>
          <option value="rating">⭐ Top Rated</option>
          <option value="name">🔤 Name: A to Z</option>
        </select>

      </div>

      {/* Result count */}
      <p className="result-count">
        Showing <strong>{filtered.length}</strong> products
        {category !== 'all' && <span> in <strong>{category}</strong></span>}
        {query && <span> for "<strong>{query}</strong>"</span>}
      </p>

      {/* No results */}
      {filtered.length === 0 && (
        <p className="status-msg">No products found. Try a different search or filter.</p>
      )}

      {/* Product grid */}
      <div className="product-grid">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;