import { ref, set, update } from 'firebase/database';
import React, { useEffect } from 'react';
import { db } from '../firebase/firebase';

const Home = () => {
  useEffect(() => {
    update(ref(db, 'carts'), {
      productname: 'some itemz',
      id: 1,
      price: 160,
    });
  }, []);

  return <div>Home</div>;
};

export default Home;
