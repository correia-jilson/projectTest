import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Paper, Button } from '@mui/material';
import PlansPage from './PlansList';
import AdminPage from './AdminPage';

function User() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/LoginForm'); 
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Paper elevation={3} style={{ padding: '20px', width: '100%', maxWidth: '400px' }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    User Dashboard
                </Typography>
                <Typography variant="body1">
                    Welcome to your dashboard!
                </Typography>
                <PlansPage/>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    style={{ marginTop: 20 }}
                    onClick={handleLogout}>
                    Logout
                </Button>
            </Paper>
        </Box>
    );
}

export default User;
