import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BasketProvider } from '../components/BasketContext';
import Error from '../pages/Error';
import App from '../App';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';
import ProductDetail from '../pages/ProductDetail';
import Basket from '../pages/Basket';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/basket',
          element: <Basket />,
        },
        {
          path: '/:categoryId',
          element: <ProductPage />,
        },
        {
          path: '/:categoryId/:productId',
          element: <ProductDetail />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return (
    <BasketProvider>
      <RouterProvider router={router} />
    </BasketProvider>
  );
}

export default Router;
