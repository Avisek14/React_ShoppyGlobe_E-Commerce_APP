// ProductDetail component - shows full details of a single product
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch single product details based on route param id
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  if (loading) return <div className="status-msg">Loading product...</div>;
  if (error)   return <div className="status-msg error">Error: {error}</div>;

  return (
    <div className="product-detail-page">
      <button className="btn btn-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="product-detail-container">
        {/* Product images */}
        <div className="product-detail-images">
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="product-detail-main-img"
          />
          <div className="product-detail-thumbs">
            {product.images?.slice(0, 4).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} ${index + 1}`}
                loading="lazy"
                className="product-detail-thumb"
              />
            ))}
          </div>
        </div>

        {/* Product info */}
        <div className="product-detail-info">
          <h2>{product.title}</h2>
          <p className="product-detail-brand">Brand: {product.brand}</p>
          <p className="product-detail-category">Category: {product.category}</p>
          <p className="product-detail-price">${product.price}</p>
          <p className="product-detail-rating">⭐ {product.rating} / 5</p>
          <p className="product-detail-stock">
            {product.stock > 0 ? `✅ In Stock (${product.stock})` : '❌ Out of Stock'}
          </p>
          <p className="product-detail-desc">{product.description}</p>

          <button
            className="btn btn-cart"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;