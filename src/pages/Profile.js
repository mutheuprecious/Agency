import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Profile = () => {
  const { state, dispatch} = useAppContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };
  const toggleTheme = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' });
  };
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState({ ...userInfo });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
    setFormValues({ ...userInfo }); // Reset form values
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ ...formValues });
    setIsEditing(false);
    setMessage('Profile updated successfully!');
  };

  return (
    <div>
      <h1>Profile</h1>
      {state.user ? (
        <div>
          <p>Welcome, {state.user.name}</p>
          <p>Email: {state.user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
      <p>Current Theme: {state.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header className="bg-primary text-white">
              <h4>Profile</h4>
            </Card.Header>
            <Card.Body>
              {message && <Alert variant="success">{message}</Alert>}
              {!isEditing ? (
                <>
                  <p>
                    <strong>First Name:</strong> {userInfo.firstName}
                  </p>
                  <p>
                    <strong>Last Name:</strong> {userInfo.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {userInfo.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {userInfo.phone}
                  </p>
                  <Button variant="primary" onClick={handleEditToggle}>
                    Edit Profile
                  </Button>
                </>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formValues.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-between">
                    <Button variant="success" type="submit">
                      Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleEditToggle}>
                      Cancel
                    </Button>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Profile;