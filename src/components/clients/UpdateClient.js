import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import '../../assets/styles/UpdateClient.css';

const UpdateClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [updated, setUpdated] = useState(false);
  const { id } = useParams(); // Get client ID from route parameters
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching client data by ID (Replace with API call)
    const fetchClientData = async () => {
      const clientData = {
        id,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
      };
      setFormData(clientData);
    };

    fetchClientData();
  }, [id]);

  // Define validateForm function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'A valid email address is required.';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = 'A valid 10-digit phone number is required.';
    return newErrors;
  };

  // Define handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Updated Client Data:', formData);
      setUpdated(true);
      setTimeout(() => {
        navigate('/clients'); // Redirect to clients list after successful update
      }, 2000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="mb-4 text-center">
        <Col>
          <h1>Update Client</h1>
          <p className="text-muted">Edit the details of the client below.</p>
        </Col>
      </Row>

      {updated && (
        <Alert variant="success">
          Client updated successfully! Redirecting to the clients list...
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter client name"
                value={formData.name}
                onChange={handleChange} // Correctly defined handleChange
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter client email"
                value={formData.email}
                onChange={handleChange} // Correctly defined handleChange
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter client phone"
                value={formData.phone}
                onChange={handleChange} // Correctly defined handleChange
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <Button variant="primary" type="submit">
              Update Client
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default UpdateClient;