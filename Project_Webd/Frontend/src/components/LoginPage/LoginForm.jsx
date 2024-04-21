import { Alert, Box, Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { connect } from 'react-redux';
import { loginSuccess } from '../../actions/userActions';
import backgroundImage from './images/bg_back.png'; // Adjust the path accordingly

const LoginForm = ({ loginSuccess }) => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        alert('Success');
        navigate('/User');

    //     e.preventDefault();
    //     setError('');
    //     setLoading(true);
    //     try {
    //         const response = await axios.post('http://localhost:5000/user/login', { email, password });
    //         if(response.data.success){
    //             localStorage.setItem('token', response.data.token);
    //             window.dispatchEvent(new Event('storageChange'));
    //             loginSuccess(response.data.user);
    //         }
    //         else{
    //             setError('Invalid email id or password.');
    //         }

    //         const decodedToken = jwtDecode(response.data.token);
    //         const user = decodedToken.user;
            
    //         const userRole = user.role;
    //         switch (userRole) {
    //             case 'admin':
    //                 console.log(userRole);
    //                 navigate('/admin');
    //                 break;
    //             case 'user':
    //                 console.log(userRole);
    //                 navigate('/user');
    //                 break;
    //             default:
    //                 console.log('Not an Admin and User');
    //                 navigate('/');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         if (error.response && error.response.status === 401) {
    //             setError('Invalid email or password');
    //         } else {
    //             setError('An unexpected error occurred. Please try again later.');
    //         }
    //     }
    //     setLoading(false);
 };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Paper
                elevation={3}
                style={{
                    opacity: '80%',
                    padding: '40px',
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '40px',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
                    {error && (
                        <Alert severity="error" style={{ marginBottom: '20px' }}>
                            {error}
                        </Alert>
                    )}
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        variant="outlined"
                        required
                        name="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        type="password"
                        variant="outlined"
                        required
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Log in
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={handleRegister}
                    >Registration?</Button>
                </form>
            </Paper>
        </Box>
    );
};

export default LoginForm;
