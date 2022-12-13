import { useDispatch } from 'react-redux';
import './App.css';
import { isLoggedInOut } from './store/slices/authSlice';
import { addProduct } from './store/slices/productsSlice';

function App() {
  const dispatch = useDispatch();

  dispatch(addProduct({ id: 1, title: 'bag', price: 400 }));
  dispatch(isLoggedInOut(true));

  return <>Hello world Home</>;
}

export default App;
