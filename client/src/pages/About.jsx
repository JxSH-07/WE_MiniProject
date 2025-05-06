import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="overlay"></div>
        <div className="container text-center">
          <h1>About JetEase</h1>
          <p className="lead">Your Journey, Our Priority</p>
        </div>
      </div>
      
      <div className="container py-5">
        {/* Company Introduction */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title">Welcome to JetEase</h2>
            <p className="lead mb-4">
              JetEase is a leading online flight booking platform dedicated to making air travel accessible, 
              affordable, and stress-free for travelers worldwide.
            </p>
            <p className="mb-0">
              Founded in 2023, we've quickly grown to become one of the most trusted names in the online travel industry. 
              Our innovative technology and customer-first approach have revolutionized how people book and manage their flights.
            </p>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="section-title">Why Choose JetEase</h2>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <div className="feature-icon bg-primary text-white">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h4>Best Price Guarantee</h4>
              <p>We offer competitive pricing and transparent fare options with no hidden fees.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <div className="feature-icon bg-primary text-white">
                <i className="fas fa-plane"></i>
              </div>
              <h4>Wide Selection</h4>
              <p>Access to thousands of flights from major airlines and regional carriers worldwide.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-card">
              <div className="feature-icon bg-primary text-white">
                <i className="fas fa-headset"></i>
              </div>
              <h4>24/7 Support</h4>
              <p>Our dedicated customer service team is available around the clock to assist you.</p>
            </div>
          </div>
        </div>
        
        {/* Our Mission & Vision */}
        <div className="row mb-5 bg-light py-5 rounded">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="mission-vision-card">
              <h3><i className="fas fa-bullseye text-primary me-2"></i> Our Mission</h3>
              <p>
                To provide travelers with a seamless booking experience by offering the best flight options at competitive prices, 
                while ensuring exceptional customer service at every step of their journey.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mission-vision-card">
              <h3><i className="fas fa-binoculars text-primary me-2"></i> Our Vision</h3>
              <p>
                To become the most trusted global platform for air travel, known for innovation, reliability, and 
                customer satisfaction, making travel accessible to everyone around the world.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Services */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="section-title">Our Services</h2>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="service-box text-center">
              <div className="service-icon">
                <i className="fas fa-plane-departure"></i>
              </div>
              <h5>Flight Booking</h5>
              <p>Domestic and international flights at competitive prices</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="service-box text-center">
              <div className="service-icon">
                <i className="fas fa-ticket-alt"></i>
              </div>
              <h5>Easy Cancellation</h5>
              <p>Hassle-free cancellation and refund policies</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="service-box text-center">
              <div className="service-icon">
                <i className="fas fa-percent"></i>
              </div>
              <h5>Special Offers</h5>
              <p>Regular discounts and promotions on flight bookings</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="service-box text-center">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h5>Mobile App</h5>
              <p>Book and manage flights on the go with our app</p>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="row stats-section text-center py-4 mb-5">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="stat-item">
              <h2 className="stat-number">500K+</h2>
              <p className="stat-text">Happy Customers</p>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="stat-item">
              <h2 className="stat-number">100+</h2>
              <p className="stat-text">Airlines Partners</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-item">
              <h2 className="stat-number">1000+</h2>
              <p className="stat-text">Destinations</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="row">
          <div className="col-12">
            <div className="cta-box text-center p-5 rounded">
              <h3 className="mb-3">Ready to Book Your Next Flight?</h3>
              <p className="mb-4">Experience the JetEase difference today and enjoy hassle-free travel planning.</p>
              <button className="btn btn-primary btn-lg" onClick={() => window.location.href='/'}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="about-footer text-center py-3">
        <div className="container">
          <p className="mb-0">© 2023-2025 JetEase. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
