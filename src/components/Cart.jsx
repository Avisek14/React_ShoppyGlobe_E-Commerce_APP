// Cart component - displays all cart items with total
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  // Get cart items from Redux state
  const cartItems = useSelector(state => state.cart);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  // Empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>🛒 Your cart is empty</h2>
        <Link to="/" className="btn btn-cart">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {/* Render each cart item with unique key */}
      <div className="cart-list">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Cart summary */}
      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <Link to="/checkout" className="btn btn-checkout">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;