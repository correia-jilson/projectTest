import { Typography, Box } from '@mui/material';

function About() {
  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
        sx={{
          fontSize: '2.5rem',
          mt: 8,
          mb: 4,
        }}
      >
        About
      </Typography>
      <Box sx={{ mt: 4, ml: 4, mr: 4 }}>
        <Typography variant="body1"
          sx={{ 
            fontSize: '1.2rem',
            textAlign: 'justify',
          }}>
          About
        </Typography>
      </Box>
    </>
  );
}

export default About;


