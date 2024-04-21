import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { jwtDecode } from 'jwt-decode'; 
import { Outlet } from 'react-router-dom';

const getUserRoleFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const decoded = jwtDecode(token);
            return decoded.user.role;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }
    return null;
};

function Layout() {
    const [userRole, setUserRole] = useState(getUserRoleFromToken());
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = () => {
            setUserRole(getUserRoleFromToken());
        };

        window.addEventListener('storageChange', handleStorageChange);
        setUserRole(getUserRoleFromToken());

        return () => {
            window.removeEventListener('storageChange', handleStorageChange);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.dispatchEvent(new Event('storageChange'));
        navigate('/login');
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Job Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {!userRole && (
                            <Nav>
                                <Nav.Link as={Link} to="Home">Home</Nav.Link>
                            </Nav>
                            )}
                            
                            {userRole === 'admin' && (
                                <>  
                                    <Nav.Link as={Link} to="Admin">Home</Nav.Link>
                                </>
                            )}

                            {userRole === 'employee' && (
                                <>  
                                    <Nav.Link as={Link} to="Employee">Home</Nav.Link>
                                </>
                            )}

                            <Nav.Link as={Link} to="About">About</Nav.Link>
                            
                            {userRole === 'admin' && (
                                <>  
                                    <Nav.Link as={Link} to="AdminPage">Employees</Nav.Link>
                                    <Nav.Link as={Link} to="AddJobsPage">Add-Jobs</Nav.Link>
                                    <NavDropdown title="MyAccount" id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            )}

                            {userRole === 'employee' && (
                                <>
                                    <Nav.Link as={Link} to="JobsList">Jobs</Nav.Link>
                                    <NavDropdown title="MyAccount" id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            )}
                        </Nav>

                        {!userRole && (
                            <Nav>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default Layout;

