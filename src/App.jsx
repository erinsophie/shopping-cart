import { Outlet } from 'react-router-dom';
import { BasketProvider } from './components/BasketContext';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Basket from '../src/components/Basket';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <BasketProvider>
        <Header />
        <Basket />
        <Outlet />
      </BasketProvider>
      <Footer />
    </div>
  );
}

export default App;
