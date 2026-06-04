// CartItem component - single item in the cart
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      {/* Product image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        loading="lazy"
        className="cart-item-img"
      />

      {/* Product info */}
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p className="cart-item-price">${item.price}</p>
        <p className="cart-item-subtotal">
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Quantity controls - min quantity is 1 */}
      <div className="cart-item-controls">
        <button
          className="btn btn-qty"
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          −
        </button>

        <span className="cart-item-qty">{item.quantity}</span>

        <button
          className="btn btn-qty"
          onClick={() => dispatch(increaseQuantity(item.id))}
        >
          +
        </button>
      </div>

      {/* Remove button */}
      <button
        className="btn btn-remove"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        🗑️ Remove
      </button>
    </div>
  );
};

// PropTypes validation
CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;