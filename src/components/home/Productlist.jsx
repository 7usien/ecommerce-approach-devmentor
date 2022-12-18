import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import OneProduct from './OneProduct';

const Productlist = () => {
  const { products, isLoading } = useSelector((state) => state.productsSlice);

  return (
    <>
      {products.length > 0 && (
        <Grid container spacing={3}>
          {isLoading && <div>loading wait ..</div>}
          {products.map((product, idx) => (
            <Grid item key={idx} xs={6} md={4} lg={3}>
              <OneProduct product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Productlist;
