// Main App component - renders Header and child routes
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;