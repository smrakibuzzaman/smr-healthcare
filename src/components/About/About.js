import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import aboutImg from './../../images/banner/banner4.jpg'
const About = () => {
    return (
        <div>
       <div className="text-white text-center"  style={{background: `url(${aboutImg})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', backgroundPosition: 'center top', height: '100vh',alignItems: 'flex-start'}}
 >
           <h1>About Us</h1>
             </div>
<Contact></Contact>
        </div>
    );
};

export default About;