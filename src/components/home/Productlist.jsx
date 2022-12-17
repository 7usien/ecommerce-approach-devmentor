import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import OneProduct from './OneProduct';

const Productlist = () => {
  const { products } = useSelector((state) => state.productsSlice);

  return (
    <>
      {!!products.length > 0 && (
        <Grid container spacing={3}>
          {products.map((product, idx) => (
            <Grid item key={idx}>
              <OneProduct product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Productlist;
