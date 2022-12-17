import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Typography,
} from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from 'react-router-dom';

const OneProduct = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;

  const navigate = useNavigate();

  function goToShoppingCartPage() {
    navigate('/cart');
  }

  const goToProductInfoPage = () => {};
  const addToShoppingCart = () => {};
  const isInCart = () => {};

  return (
    <Card
      sx={{
        height: { xs: 300, sm: 360 },
        borderRadius: '25px 0',
      }}
    >
      <CardActionArea onClick={goToProductInfoPage}>
        <CardHeader
          title={
            <Typography noWrap align='center' width='150px'>
              {title}
            </Typography>
          }
        />
        <CardMedia
          component='img'
          src={image}
          sx={{
            objectFit: 'contain',
            height: { xs: 100, sm: 150 },
          }}
        />
        <CardContent>
          <Typography variant='h5' fontWeight='bold'>
            € {price}
          </Typography>
          <Rating precision={0.1} value={rating.rate} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isInCart ? (
          <IconButton onClick={goToShoppingCartPage}>
            <ShoppingCartCheckoutIcon fontSize='large' color='success' />
          </IconButton>
        ) : (
          <IconButton onClick={addToShoppingCart}>
            <AddShoppingCartIcon fontSize='large' color='secondary' />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default OneProduct;
