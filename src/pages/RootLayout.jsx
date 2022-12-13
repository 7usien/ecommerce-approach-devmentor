import { onAuthStateChanged } from 'firebase/auth';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { auth } from './../firebase/firebase';
import { useDispatch } from 'react-redux';
import { isLoggedInOut } from '../store/slices/authSlice';

const RootLayout = () => {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('user signed succ');
      // User is signed in, see docs for a list of available properties
      dispatch(isLoggedInOut(true));
      // ...
    } else {
      // User is signed out
      // ...
      console.log('user signed failed');

      dispatch(isLoggedInOut(false));
    }
  });

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
