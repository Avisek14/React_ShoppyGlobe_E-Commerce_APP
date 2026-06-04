// ProductItem component - single product card
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../redux/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  // Handle add to cart button click
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      {/* Lazy loaded image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        className="product-thumbnail"
      />

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-rating">⭐ {product.rating}</p>
      </div>

      <div className="product-actions">
        {/* Navigate to product detail page */}
        <Link to={`/product/${product.id}`} className="btn btn-detail">
          View Details
        </Link>

        {/* Add to cart button */}
        <button className="btn btn-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// PropTypes validation
ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;