import React, { useEffect, useState } from 'react';
import { CircularProgress, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const Root = styled('div')(({ theme }) => ({
  backgroundColor: '#2196f3',
  minHeight: '95vh',
  paddingTop: theme.spacing(8),
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: theme.spacing(4),
  padding: theme.spacing(4),
}));

const TableHeader = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#3949ab',
}));

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/user/getAll')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Root>
      <StyledContainer maxWidth="md">
        <Typography
          variant="h2"
          fontWeight="bold"
          align="center"
          sx={{
            fontSize: '3rem',
            fontWeight: '800',
            marginTop: '30px',
            marginBottom: '30px',
            color: 'black',
          }}
        >
          Employees List
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Type</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={user.id || index}>
                    <TableCell>{user.fullName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role || 'N/A'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </StyledContainer>
    </Root>
  );
};

export default AdminPage;
