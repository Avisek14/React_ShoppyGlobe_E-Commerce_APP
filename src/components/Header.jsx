// Header component - navigation menu and cart icon
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // Get total cart item count from Redux
  const cartItems = useSelector(state => state.cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">🛍️ ShoppyGlobe</Link>
      </div>

      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;