
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import {jwtDecode} from 'jwt-decode';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/userActions';


const Login = ({ loginSuccess }) => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/user/login', { email, password });
            if(response.data.success){
                localStorage.setItem('token', response.data.token);
                window.dispatchEvent(new Event('storageChange'));
                loginSuccess(response.data.user);
            }
            else{
                setError('Invalid email id or password.');
            }

            const decodedToken = jwtDecode(response.data.token);
            const user = decodedToken.user;
            
            const userRole = user.role;
            switch (userRole) {
                case 'admin':
                    console.log(userRole);
                    navigate('/admin');
                    break;
                case 'employee':
                    console.log(userRole);
                    navigate('/employee');
                    break;
                default:
                    console.log('Not an Admin and Employee');
                    navigate('/');
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 401) {
                setError('Invalid email or password');
            } else {
                setError('An unexpected error occurred. Please try again later.');
            }
        }
        setLoading(false);
    };

    return (
        <Container maxWidth="xs">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    marginTop: 15,
                    padding: 2,
                }}
            >
                <Typography variant="h5" gutterBottom sx={{ color: 'orange' }}>Login</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        type="email"
                        label="email"
                        fullWidth
                        margin="normal"
                        autoFocus
                        required
                        value={email}
                        sx={{
                            '& .MuiInputBase-input': { py: 1 },
                            '& .MuiOutlinedInput-root': { height: '50px' },
                        }}
                        onChange={(e) => setemail(e.target.value)}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        fullWidth
                        required
                        margin="normal"
                        value={password}
                        sx={{
                            '& .MuiInputBase-input': { py: 1 },
                            '& .MuiOutlinedInput-root': { height: '50px' },
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                        <Typography component="p" color="error" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, backgroundColor: "orange" }}
                        disabled={loading}
                    >
                        
                    {loading ? 'Logging in...' : 'Login'}
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2 ,textAlign: 'center' }}>Don't have an account? <Link to="/Register">Sign up</Link></Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default connect(null, { loginSuccess })(Login);


