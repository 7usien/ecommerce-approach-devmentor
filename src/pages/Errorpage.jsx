import { Box, Typography } from '@mui/material';
import React from 'react';

const Errorpage = () => {
  return (
    <Box>
      <Typography component='h4' variant='h6'>
        404 error
      </Typography>

      <Typography component='p'>sorry the content is not found !</Typography>
    </Box>
  );
};

export default Errorpage;
