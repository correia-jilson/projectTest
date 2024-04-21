
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const CompanyGallery = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div>
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
        Company Showcase
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ padding: '0 50px' }}>
        {companies.map(company => (
          <Grid item key={company._id} xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={`http://localhost:3001/${company.imageUrl}`}/>
              <CardContent>
                <Typography variant="h6" gutterBottom align="center" color="limegreen">
                  <b>{company.name}</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CompanyGallery;



