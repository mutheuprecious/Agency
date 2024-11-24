import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'A valid email address is required.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch('/api/forgot-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          setSubmitted(true);
          setEmail('');
        } else {
          setErrors({ form: 'Failed to send reset link. Try again.' });
        }
      } catch (error) {
        console.error('Error sending reset link:', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="mb-4 text-center">
        <Col>
          <h1>Forgot Password</h1>
          <p className="text-muted">
            Enter your email address to receive a password reset link.
          </p>
        </Col>
      </Row>

      {submitted && (
        <Alert variant="success">
          A password reset link has been sent to your email address.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <Button variant="primary" type="submit">
              Send Reset Link
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="mt-3">
        <Col className="text-center">
          <Button variant="link" onClick={() => navigate('/login')}>
            Back to Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;