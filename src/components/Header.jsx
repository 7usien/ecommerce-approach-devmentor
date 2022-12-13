import { Typography, Box, Container, Badge, IconButton } from '@mui/material';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { styles } from './Header.module.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
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
          <NavLink to='cart'>
            <IconButton aria-label='cart' size='large'>
              <Badge badgeContent={4} color='warning'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </NavLink>
          <NavLink to='login'>signin</NavLink>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
