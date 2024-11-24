import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/styles/Home.css'

const Home = () => {
  return (
    <Container fluid className="home-container">
      {/* Hero Section */}
      <Row className="hero-section text-center text-white">
        <Col>
          <h1 className="hero-title">Welcome to Agency App</h1>
          <p className="hero-subtitle">
            Your ultimate solution for managing clients and users efficiently.
          </p>
          <Button as={Link} to="/get-started" variant="light" size="lg" className="mt-3">
            Get Started
          </Button>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="features-section text-center my-5">
        <Col>
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">We provide the tools you need to streamline your operations.</p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md={4} className="feature-item">
          <i className="bi bi-person-check feature-icon"></i>
          <h5 className="feature-title">Efficient Management</h5>
          <p className="feature-description">Manage clients and users effortlessly with our platform.</p>
        </Col>
        <Col md={4} className="feature-item">
          <i className="bi bi-shield-lock feature-icon"></i>
          <h5 className="feature-title">Secure and Reliable</h5>
          <p className="feature-description">Your data is safe with us, thanks to top-notch security.</p>
        </Col>
        <Col md={4} className="feature-item">
          <i className="bi bi-graph-up feature-icon"></i>
          <h5 className="feature-title">Actionable Insights</h5>
          <p className="feature-description">
            Generate detailed reports to analyze and improve your agency's performance.
          </p>
        </Col>
      </Row>

      {/* Testimonials Section */}
      <Row className="testimonials-section text-center py-5">
        <Col>
          <h2>What Our Clients Say</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="testimonial-card">
            <Card.Body>
              <blockquote className="blockquote">
                <p>"Agency App has revolutionized the way we manage clients."</p>
                <footer className="blockquote-footer">Jane Doe, CEO</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="testimonial-card">
            <Card.Body>
              <blockquote className="blockquote">
                <p>"A must-have tool for every agency."</p>
                <footer className="blockquote-footer">John Smith, Manager</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="testimonial-card">
            <Card.Body>
              <blockquote className="blockquote">
                <p>"Intuitive and powerful, highly recommend it!"</p>
                <footer className="blockquote-footer">Sarah Lee, Director</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call-to-Action Section */}
      <Row className="cta-section text-center py-5">
        <Col>
          <h3>Join thousands of agencies using our platform!</h3>
          <p>Sign up today and experience the difference.</p>
          <Button as={Link} to="/signup" variant="primary" size="lg" className="mt-3">
            Sign Up Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;