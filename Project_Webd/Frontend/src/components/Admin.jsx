import { Typography, Fade } from '@mui/material';
import { useEffect } from 'react';

const Admin = () => {
  useEffect(() => {

    document.body.style.backgroundColor = 'maroon';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <Fade in={true} timeout={2000}>
      <Typography
        variant="h2"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
        sx={{
          fontSize: '4rem',
          mt: 30,
          mb: 5,
          color: 'white',
        }}
      >
        Greetings Admin!!
      </Typography>
    </Fade>
  );
};

export default Admin;


