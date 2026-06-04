// Entry point - setup Redux Provider and Router
import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './redux/store';
import './index.css';

// Lazy load all components for performance
const App         = lazy(() => import('./App'));
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart        = lazy(() => import('./components/Cart'));
const Checkout    = lazy(() => import('./components/Checkout'));
const NotFound    = lazy(() => import('./components/NotFound'));

// Create router with all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true,          element: <ProductList /> },
      { path: 'product/:id',  element: <ProductDetail /> },
      { path: 'cart',         element: <Cart /> },
      { path: 'checkout',     element: <Checkout /> },
      { path: '*',            element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>
);