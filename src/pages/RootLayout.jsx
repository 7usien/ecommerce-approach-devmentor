import { onAuthStateChanged } from 'firebase/auth';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { auth, db } from './../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInOut } from '../store/slices/authSlice';
import { set, ref, onValue } from 'firebase/database';
import { useEffect } from 'react';
import { addProduct } from '../store/slices/productsSlice';
const RootLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
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
  }, []);

  useEffect(() => {
    try {
      const res = fetch('https://fakestoreapi.com/products');
      res
        .then((raw) => raw.json())
        //write data to db> products
        .then((data) => set(ref(db, 'products'), data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    // read data > db
    const starCountRef = ref(db, 'products');

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      dispatch(addProduct(data));
    });
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
