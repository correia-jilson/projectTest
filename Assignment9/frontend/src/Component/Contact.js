
import { Typography, Box, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'maroon',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  marginLeft: theme.spacing(4),
  marginRight: theme.spacing(4),
}));

function Contact() {
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
        Contact
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={5}>
          <Item>Phone Number: 857 763 8363</Item>
          <Item>Email Id: jilson@gmail.com</Item>
          <Item>LinkedIn: www.linkedin.com/in/jilson-correia</Item>
        </Stack>
      </Box>
    </>
  );
}

export default Contact;

