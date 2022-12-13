import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { themeOptions } from './theme/theme';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';

import routes from './router/routes';
import { RouterProvider } from 'react-router-dom';

//firebase authntication listener

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes}>
      <ThemeProvider theme={themeOptions}>
        <App />
      </ThemeProvider>
    </RouterProvider>
  </Provider>
);
