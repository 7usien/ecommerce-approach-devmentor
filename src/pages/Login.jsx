import { Container, Box, Typography, TextField, Button } from '@mui/material';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Errormsg from '../components/Errormsg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        navigate('/');
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setErrorMsg(error.message);
      });
  };

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // after Signed up redirect to home
        navigate('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log('signup failed');
        // ..
      });
  };

  const { isLogged } = useSelector((state) => state.authSlice);

  const changeMail = (e) => {
    setEmail(e.target.value);
    setErrorMsg(null);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    setErrorMsg(null);
  };

  return (
    <Container component='main' maxWidth='xs'>
      {isLogged ? (
        <Navigate to='/' />
      ) : (
        <Box
          sx={{
            marginTop: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'cernter',
          }}
        >
          <form onSubmit={login} noValidate>
            {errorMsg && <Errormsg errormsg={errorMsg} />}

            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>

            <Box component='form' noValidate sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={changeMail}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={changePassword}
              />

              <Button
                onClick={(e) => {
                  login(e);
                }}
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Button
                onClick={signup}
                type='button'
                fullWidth
                variant='outlined'
                sx={{ mt: 1 }}
              >
                Don't have an account? Sign Up
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </Container>
  );
};

export default Login;
