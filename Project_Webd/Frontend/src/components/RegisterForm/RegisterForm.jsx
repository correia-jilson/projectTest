import { Button, Box, Paper, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import backgroundImage from './images/bg_back.png';// Import the background image

const RegisterForm = () => {
    const navigate = useNavigate();
    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        alert('Registered')
        navigate('/LoginForm')

        // e.preventDefault();
        // setError('');
        // setLoading(true);

        // if (password !== confirmPassword) {
        //     setError('Passwords do not match');
        //     setLoading(false);
        //     return;
        // }

        // try {
        //     const response = await axios.post('http://localhost:5000/user/create', { fullName, email, password, role});
        //     console.log(response);
        //     navigate('/');
        //     setError('Registration functionality not implemented yet.');
        // } catch (error) {
        //     setError('An unexpected error occurred. Please try again later.');
        // }
        // setLoading(false);
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
            <Paper elevation={3} style={{
                    opacity: '80%',
                    padding: '40px',
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '40px',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Register
                </Typography>
                {error && <Typography color="error" style={{ marginBottom: '20px' }}>{error}</Typography>}
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        name="fullname"
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        margin="normal"
                        required
                        value={fullName}
                        onChange={(e) => setfullName(e.target.value)}
                    />
                    <TextField
                        name="email"
                        fullWidth
                        label="Email ID"
                        variant="outlined"
                        margin="normal"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        name="password"
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        name="confirmPassword"
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel id="role-select-label">Role</InputLabel>
                        <Select
                            name="Role"
                            fullWidth
                            type="password"
                            variant="outlined"
                            margin="normal"
                            required
                            value={role}
                            label="Role"
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="employee">User</MenuItem>
                        </Select>
                    </FormControl>
                    {error && (
                        <Typography component="p" color="error" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '16px' }}>
                        Register
                    </Button>
                </form>
            </Paper>
            
        </Box>
    );
}

export default RegisterForm;
