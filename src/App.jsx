import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useBasket } from './components/BasketContext';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Basket from './components/Basket';

function App() {
  const { showBasket, setShowBasket, setBasket } = useBasket();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/checkout') {
      setShowBasket(false);
      setBasket([]);
    }
  }, [location.pathname, setShowBasket, setBasket]);

  return (
    <div>
      <Header />
      {showBasket && <Basket />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
