import {
  Typography,
  Box,
  Container,
  Badge,
  IconButton,
  Button,
} from '@mui/material';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from './../firebase/firebase';
const Header = () => {
  const { isLogged } = useSelector((state) => state.authSlice);

  const navigate = useNavigate();

  const logout = () => {
    signOut(auth).then(() => {
      navigate('login');
    });
  };

  return (
    <Box
      component='header'
      paddingY={2}
      sx={{
        backgroundColor: 'primary.main',
        boxShadow: '2px 2px 4px #ddd',
        height: '80px',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'enter',
          justifyContent: 'space-between',
          height: '80px',
        }}
      >
        <Typography component='h2' variant='h5' color='beige'>
          <Link to='/'>
            <LocalMallIcon />
            Souq Cart
          </Link>
        </Typography>

        <Box
          component='ul'
          sx={{ columnGap: '1rem', display: 'flex', color: '#fff' }}
          fontSize={22}
        >
          <Link to='cart'>
            <IconButton aria-label='cart' size='large'>
              <Badge badgeContent={4} color='warning'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>

          {!isLogged ? (
            <Button
              variant='outlined'
              onClick={() => {
                navigate('/login');
              }}
              color='primary'
              sx={{ backgroundColor: '#fff' }}
            >
              Login
            </Button>
          ) : (
            <Button
              variant='outlined'
              onClick={logout}
              color='secondary'
              sx={{ backgroundColor: '#fff' }}
            >
              logout
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
