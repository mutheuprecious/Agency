import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="text-muted">
        The page you're looking for doesn't exist. It might have been removed or you may have entered the URL incorrectly.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          Go to Home
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;