import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CircularProgress, Typography } from '@mui/material';

const PlansPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   document.body.style.backgroundColor = 'teal';
  //   document.body.style.color = 'white';

  //   return () => {
  //     document.body.style.backgroundColor = '';
  //     document.body.style.color = '';
  //   };
  // }, []);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/plan/getAll')
  //     .then(response => {
  //       setJobs(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching jobs:', error);
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div>
      <Typography
        variant="h2"
        fontWeight="bold"
        align="center"
        style={{
          fontSize: '3rem',
          fontWeight: '800',
          marginTop: '50px',
          marginBottom: '20px'
        }}
      >
        PLANS
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '30px',
          }}
        >
          {jobs.map(job => (
            <Card
              key={job._id}
              style={{
                flex: '1 1 300px',
                minWidth: '300px',
                maxWidth: '300px',
                margin: '20px 50px',
              }}
            >
              <CardContent>
                <Typography variant="h6" component="h2"><b>{job.companyName}</b></Typography>
                <Typography color="textSecondary">Plan Title: Premium</Typography>
                <Typography color="textSecondary">Description: Premium Web services with domain hosting and assistance</Typography>
                <Typography color="textSecondary">Price: $49.95</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlansPage;
