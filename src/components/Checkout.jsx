// Checkout component - order form + cart summary + place order
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get cart items from Redux
  const cartItems = useSelector(state => state.cart);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  // Order placed state
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle place order button
  const handlePlaceOrder = () => {
    // Basic validation - check all fields filled
    const allFilled = Object.values(formData).every(val => val.trim() !== '');
    if (!allFilled) {
      alert('Please fill all the fields');
      return;
    }

    // Show order placed message
    setOrderPlaced(true);

    // Clear cart from Redux
    dispatch(clearCart());

    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  // If cart is empty and no order placed, redirect
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="cart-empty">
        <h2>🛒 Your cart is empty</h2>
        <button className="btn btn-cart" onClick={() => navigate('/')}>
          Go Shopping
        </button>
      </div>
    );
  }

  // Order placed success screen
  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="order-success-box">
          <h2>✅ Order Placed!</h2>
          <p>Thank you for shopping with ShoppyGlobe.</p>
          <p>Redirecting you to Home page...</p>
          <div className="order-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>🧾 Checkout</h2>

      <div className="checkout-container">

        {/* Left - User details form */}
        <div className="checkout-form">
          <h3>Delivery Details</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Right - Cart summary */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>

          {cartItems.map(item => (
            <div key={item.id} className="summary-item">
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                className="summary-item-img"
              />
              <div className="summary-item-info">
                <p>{item.title}</p>
                <p>Qty: {item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="summary-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>

          {/* Place order button */}
          <button className="btn btn-place-order" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;