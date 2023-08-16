import { Outlet } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
