import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography, Container } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#2196f3',
    minHeight: '95vh',
    paddingTop: theme.spacing(8),
  },
  container: {
    backgroundColor: 'white',
    borderRadius: theme.spacing(4),
    padding: theme.spacing(4),
  },
  tableHeader: {
    fontWeight: 'bold',
    color: '#3949ab',
  }
}));

const AdminPage = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/user/getAll')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <Typography
          variant="h2"
          fontWeight="bold"
          align="center"
          style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginTop: '30px',
            marginBottom: '30px',
            color: '#black'
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
                  <TableCell className={classes.tableHeader}>Name</TableCell>
                  <TableCell className={classes.tableHeader}>Email</TableCell>
                  <TableCell className={classes.tableHeader}>Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => {
                  console.log('User:', user);
                  return (
                    <TableRow key={user.id || index}>
                      <TableCell>{user.fullName}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role || 'N/A'}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </div>
  );
};

export default AdminPage;

