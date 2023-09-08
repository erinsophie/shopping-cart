import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from '../pages/Error';
import App from '../App';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';

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
          path: '/:category',
          element: <ProductPage />,
        },
        {
          path: '/:category/:productId',
          element: <ProductDetail />,
        },
        {
          path: '/checkout',
          element: <Checkout />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
