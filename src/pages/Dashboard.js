import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/Dashboard.css';

const Dashboard = () => {
  return (
    <Container className="mt-5 dashboard-container">
      <Row className="mb-4 text-center">
        <Col>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Get a quick overview of your agency's performance.</p>
        </Col>
      </Row>

      {/* Metrics Section */}
      <Row className="text-center mb-5">
        <Col md={4}>
          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <Card.Title>Total Clients</Card.Title>
              <Card.Text className="dashboard-card-value">120</Card.Text>
              <Button variant="primary" as={Link} to="/clients">
                Manage Clients
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text className="dashboard-card-value">45</Card.Text>
              <Button variant="success" as={Link} to="/users">
                Manage Users
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card shadow-sm">
            <Card.Body>
              <Card.Title>Active Projects</Card.Title>
              <Card.Text className="dashboard-card-value">8</Card.Text>
              <Button variant="warning" as={Link} to="/projects">
                View Projects
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call-to-Action Section */}
      <Row className="text-center">
        <Col>
          <Button variant="outline-dark" as={Link} to="/reports" className="dashboard-cta-btn">
            View Detailed Reports
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;