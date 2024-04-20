import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled('div')(({ theme }) => ({
  backgroundColor: 'purple',
  minHeight: '95vh',
  paddingTop: theme.spacing(8),
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(4),
  padding: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'purple',
  color: 'white',
  '&:hover': {
    backgroundColor: '#e91e63',
  },
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: 'red',
  marginTop: theme.spacing(1),
}));

const AddPlansPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    description: '',
    salary: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.jobTitle || !formData.description || !formData.salary) {
      setErrorMessage('Please fill out all the fields.');
      return;
    }
    axios
      .post('http://localhost:5000/plan/create', formData)
      .then((response) => {
        console.log('Plan created successfully:', response.data);
        setFormData({
          companyName: '',
          jobTitle: '',
          description: '',
          salary: '',
        });
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error creating Plan:', error);
        setErrorMessage('');
      });
  };

  return (
    <Root>
      <StyledContainer>
        <Typography
          variant="h2"
          fontWeight="bold"
          align="center"
          sx={{
            fontSize: '3rem',
            fontWeight: '800',
            marginTop: '50px',
            marginBottom: '10px',
            color: 'black',
          }}
        >
          Add Jobs
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                multiline
                minRows={3}
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledButton variant="contained" color="primary" type="submit">
                Save
              </StyledButton>
              {errorMessage && (
                <ErrorMessage variant="body2">{errorMessage}</ErrorMessage>
              )}
            </Grid>
          </Grid>
        </form>
      </StyledContainer>
    </Root>
  );
};

export default AddPlansPage;
