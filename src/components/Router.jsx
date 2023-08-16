import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from '../pages/Error';
import App from '../App';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';
import ProductDetail from '../pages/ProductDetail';

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

  return <RouterProvider router={router} />;
}

export default Router;
