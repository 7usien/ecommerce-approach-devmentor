import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import productsSlice from './../store/slices/productsSlice';
import { Box, Container } from '@mui/system';
import {
  Grid,
  Typography,
  Button,
  CardMedia,
  Rating,
  Stack,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Details = () => {
  const { id } = useParams();

  const product = useSelector((state) =>
    state.productsSlice.products.find((product) => product.id == Number(id))
  );

  let returnedValue;

  if (product) {
    const { title, price, description, category, image, rating } = product;

    returnedValue = (
      <Container>
        <Box sx={{ marginY: '3rem' }}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Typography
                variant='h4'
                component='h1'
                color='text.primary'
                mb={2}
              >
                {title}
              </Typography>
              <Typography variant='h6' fontStyle='italic'>
                {category}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia component='img' src={image} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack justifyContent='center' height='100%' spacing={5}>
                <Typography variant='h6' component='p'>
                  {description}
                </Typography>
                <Typography variant='h3' fontWeight={600} color='primary'>
                  € {price}
                </Typography>
                <Rating
                  name='half-rating-read'
                  defaultValue={rating.rate}
                  precision={0.5}
                  size='large'
                  readOnly
                />
                <Box>
                  <Button
                    variant='contained'
                    startIcon={<AddShoppingCartIcon fontSize='small' />}
                    size='large'
                    sx={{ p: '5px 25px', fontSize: '20px' }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }

  return returnedValue;
};

export default Details;
