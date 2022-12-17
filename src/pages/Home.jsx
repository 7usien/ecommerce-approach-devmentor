import { ref, set, update } from 'firebase/database';
import React, { useEffect } from 'react';
import { db } from '../firebase/firebase';
import { Container } from '@mui/material';
import Productlist from '../components/home/Productlist';

const Home = () => {
  return (
    <Container>
      <Productlist />
    </Container>
  );
};

export default Home;
