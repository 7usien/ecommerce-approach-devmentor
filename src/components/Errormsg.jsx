import { Alert } from '@mui/material';
import React from 'react';

const Errormsg = ({ errormsg }) => {
  return (
    <Alert security='error' sx={{ mb: 5 }}>
      {errormsg}
    </Alert>
  );
};

export default Errormsg;
