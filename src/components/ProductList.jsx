// ProductList component - displays all products with search
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/searchSlice';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();

  // Get search query from Redux state
  const searchQuery = useSelector(state => state.search.query);

  // Fetch products using custom hook
  const { products, loading, error } = useFetchProducts();

  // Filter products based on search query from Redux
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show loading state
  if (loading) return <div className="status-msg">Loading products...</div>;

  // Show error state
  if (error) return <div className="status-msg error">Error: {error}</div>;

  return (
    <div className="product-list-page">
      <h2>All Products</h2>

      {/* Search input - dispatches to Redux */}
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={searchQuery}
        onChange={e => dispatch(setSearchQuery(e.target.value))}
      />

      {/* No results message */}
      {filteredProducts.length === 0 && (
        <p className="status-msg">No products found for "{searchQuery}"</p>
      )}

      {/* Product grid - unique key for each */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;