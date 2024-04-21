
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Invalid username or password');
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
                        type="username"
                        label="Username"
                        fullWidth
                        margin="normal"
                        autoFocus
                        required
                        value={username}
                        sx={{
                            '& .MuiInputBase-input': { py: 1 },
                            '& .MuiOutlinedInput-root': { height: '50px' },
                        }}
                        onChange={(e) => setUsername(e.target.value)}
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
                </Box>
            </Box>
        </Container>
    );
};

export default Login;





