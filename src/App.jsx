import { Outlet } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="border border-red-700">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
