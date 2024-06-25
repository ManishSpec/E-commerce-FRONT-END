import React from "react";
import Container from "react-bootstrap/Container";
import Layout from "../Components/Layout/Layout";
import contactImage from '../assets/images/contact.png';
import '../styles/contact.css';

const ContactUs = () => {
  return (
    <Layout title={"Contact us - Ecommerce app"}>
      <section id="contact" className="block contact-block">
        <Container fluid>
          <div className="title-holder">
            <h2>CONTACT ME</h2>
            <div className="subtitle">Any queries?</div>
          </div>

          <div className="about-page">
            <div className="about-content">
              <img
                src={contactImage}
                alt="Contact Us"
                className="contact-image"
                style={{ width: '500px', height: '300px' }}
              />
               <div className="about-text">
                <h2>Contact</h2>
                <p>
                <i className="fas fa-envelope" style={{ color: 'red' }}></i>
                &nbsp;&nbsp;
                  <strong>Email:</strong> bingimanishkumar380@gmail.com
                </p>
                <p>
                <i class="fa fa-phone" style={{ color: 'red' }} ></i>
                &nbsp;&nbsp;
                  <strong> Phone:</strong> 7702498622
                </p>
              </div>
            </div>
          </div>       
        </Container>
      </section>
    </Layout>
  );
};

export default ContactUs;