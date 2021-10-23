import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BG from '../../images/banner/bg.png'
import Footer from '../Footer/Footer';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className="text-white">
                <Row style={{background: `url(${BG})`}}>
                    <Col xs={12} md={6}>
<h1>Contact Us</h1>
<ul className="list-unstyled">
    <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg> info@smrhealthcare.com</li>
    <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
</svg> +88017191230100</li>
    <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> 12/B, Dhaka, Bangladesh</li>
</ul>
                    </Col>

                    <Col xs={12} md={6}>
<h1>Quick Links</h1>
<ul className="list-unstyled">
<li><Link to="/home" className="text-white decoration">Home</Link></li>
<li><Link to="/about" className="text-white decoration">About Us</Link></li>
<li><Link to="/services" className="text-white decoration">Services</Link></li>
<li><Link to="/blog" className="text-white decoration">Blog</Link></li>
<li><Link to="/feedback" className="text-white decoration">Feedback</Link></li>

</ul>
                    </Col>
                </Row>
            </div>
            <Footer> </Footer>
        </div>
    );
};

export default Contact;