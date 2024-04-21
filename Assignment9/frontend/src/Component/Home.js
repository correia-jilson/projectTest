
import { Typography, Fade } from '@mui/material';

const Home = () => {

  document.body.style.backgroundColor = 'maroon';
  document.body.style.color = 'white';

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
          mb: 5
        }}
      >
        Welcome to the Job Portal!!
      </Typography>
    </Fade>
  );
};

export default Home;

