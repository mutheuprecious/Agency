import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const UpdateAgency = () => {
  const [formData, setFormData] = useState({
    agencyName: '',
    address: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    // Fetch agency data for pre-filling (simulate API call)
    setFormData({
      agencyName: 'Example Agency',
      address: '123 Main St',
      email: 'example@agency.com',
      phone: '1234567890',
    });
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.agencyName) newErrors.agencyName = 'Agency name is required.';
    if (!formData.address) newErrors.address = 'Address is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'A valid email is required.';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = 'A valid 10-digit phone number is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setUpdated(true);
      console.log('Updated Agency Data:', formData);
      // Add API call logic here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="mb-4 text-center">
        <Col>
          <h1>Update Agency</h1>
          <p className="text-muted">Modify the details of your agency below.</p>
        </Col>
      </Row>

      {updated && (
        <Alert variant="success" onClose={() => setUpdated(false)} dismissible>
          Agency updated successfully!
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formAgencyName">
              <Form.Label>Agency Name</Form.Label>
              <Form.Control
                type="text"
                name="agencyName"
                placeholder="Enter agency name"
                value={formData.agencyName}
                onChange={handleChange}
                isInvalid={!!errors.agencyName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.agencyName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <Button variant="primary" type="submit">
              Update Agency
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default UpdateAgency;