import { Outlet } from 'react-router-dom';
import { useBasket } from './components/BasketContext';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Basket from './components/Basket';

function App() {
  const { showBasket } = useBasket();

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
