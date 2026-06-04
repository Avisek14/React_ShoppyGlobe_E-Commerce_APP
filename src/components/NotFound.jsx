// NotFound component - 404 page for unknown routes
import { useNavigate, useLocation } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="notfound-page">
      <div className="notfound-box">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-desc">
          Oops! The page{' '}
          <span className="notfound-path">"{location.pathname}"</span>{' '}
          does not exist on ShoppyGlobe.
        </p>
        <p className="notfound-hint">
          The page may have been moved, deleted, or never existed.
        </p>
        <button className="btn btn-cart" onClick={() => navigate('/')}>
          🏠 Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;