

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, TextField, Button, Typography, Container, MenuItem, Select, FormControl, InputLabel } from '@mui/material';


const Register = () => {
    const navigate = useNavigate();
    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/user/create', { fullName, email, password, role});
            console.log(response);
            navigate('/');
            setError('Registration functionality not implemented yet.');
        } catch (error) {
            setError('An unexpected error occurred. Please try again later.');
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
                <Typography variant="h5" gutterBottom sx={{ color: 'orange' }}>Register</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        type="fullName"
                        label="Full Name"
                        fullWidth
                        margin="normal"
                        autoFocus
                        required
                        value={fullName}
                        onChange={(e) => setfullName(e.target.value)}
                    />
                    <TextField
                        type="email"
                        label="Email ID"
                        fullWidth
                        margin="normal"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        fullWidth
                        margin="normal"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        type="password"
                        label="Confirm Password"
                        fullWidth
                        margin="normal"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel id="role-select-label">Role</InputLabel>
                        <Select
                            labelId="role-select-label"
                            id="role-select"
                            value={role}
                            label="Role"
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="employee">Employee</MenuItem>
                        </Select>
                    </FormControl>
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
                        {loading ? 'Registering...' : 'Register'}
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2 ,textAlign: 'center' }}>Already have an account? <Link to="/login">Login</Link></Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;



