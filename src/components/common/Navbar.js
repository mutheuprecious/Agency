import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const NavbarComponent = () => {
  const { user, logout, theme, toggleTheme } = useAppContext();

  return (
    <Navbar bg={theme === 'light' ? 'light' : 'dark'} variant={theme} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Agency App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/clients">
              Clients
            </Nav.Link>
            <Nav.Link as={Link} to="/create-client">
              Create Client
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <>
                <Navbar.Text className="me-2">
                  Signed in as: <strong>{user.name}</strong>
                </Navbar.Text>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={logout}
                  className="me-2"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
            <Button
              variant={theme === 'light' ? 'dark' : 'light'}
              size="sm"
              onClick={toggleTheme}
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;