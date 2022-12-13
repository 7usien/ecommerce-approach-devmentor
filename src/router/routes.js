import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/RootLayout';
import Errorpage from '../pages/Errorpage';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Cart from '../pages/Cart';
import Login from '../pages/Login';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Home /> },

      { path: 'product/:id', element: <Details /> },
      { path: 'cart', element: <Cart /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);

export default routes;
