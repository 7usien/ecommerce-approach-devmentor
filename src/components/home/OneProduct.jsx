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
import { useNavigate } from 'react-router-dom';
import { wait } from './../../utils/wait';
import ProtectedRoute from '../../secure/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';

import { getAuth } from 'firebase/auth';
import { addToCartAsync } from './../../store/slices/shoppingCartSlice';

const OneProduct = ({ product }) => {
  const { id, title, price, image, rating } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.authSlice);

  function goToShoppingCartPage() {
    navigate('/cart');
  }

  const addToShoppingCart = () => {
    if (!isLogged) {
      goToShoppingCartPage();
      return;
    }
    const uid = getAuth().currentUser.uid;
    dispatch(addToCartAsync(product, uid));
    // add to shooping cart
  };
  const goToProductInfoPage = async () => {
    await wait(500);
    navigate('/product/' + id);
  };
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
            maxWidth: { xd: 100, sm: 150 },
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
        <IconButton onClick={addToShoppingCart}>
          <AddShoppingCartIcon fontSize='large' color='secondary' />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default OneProduct;
