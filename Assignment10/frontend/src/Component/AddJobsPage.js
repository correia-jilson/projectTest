import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'purple',
    minHeight: '95vh',
    paddingTop: theme.spacing(8)
  },
  container: {
    backgroundColor: 'white',
    borderRadius: theme.spacing(4),
    padding: theme.spacing(4),
  },
  button: {
    backgroundColor: 'purple',
    color: 'white',
    '&:hover': {
      backgroundColor: '#e91e63',
    },
  },
  errorMessage: {
    color: 'red',
    marginTop: theme.spacing(1),
  },
}));

const AddJobPage = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    description: '',
    salary: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.jobTitle || !formData.description || !formData.salary) {
      setErrorMessage('Please fill out all the fields.');
      return;
    }
    axios.post('http://localhost:5000/job/create', formData)
      .then(response => {
        console.log('Job created successfully:', response.data);
        setFormData({
          companyName: '',
          jobTitle: '',
          description: '',
          salary: ''
        });
        setErrorMessage('');
      })
      .catch(error => {
        console.error('Error creating job:', error);
        setErrorMessage('');
      });
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
      <Typography
        variant="h2"
        fontWeight="bold"
        align="center"
        style={{
          fontSize: '3rem',
          fontWeight: '800',
          marginTop: '50px',
          marginBottom: '10px',
          color: '#black'
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
              <Button variant="contained" color="primary" type="submit" className={classes.button}>Save</Button>
              {errorMessage && <Typography variant="body2" className={classes.errorMessage}>{errorMessage}</Typography>}
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default AddJobPage;





