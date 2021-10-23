import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import aboutImg from './../../images/banner/banner4.jpg'
const About = () => {
    return (
        <div>
            <Header/>
       <div className="container text-center text-dark"  
 >
           <h1 className="text-secondary fw-bold ">About Us</h1>
           <h3>Top Health Care Quality from Leading Physicians of the World</h3>
           <p>For more than 6 years, SMR Health Care has provided the best in health care and the latest in medical technology to the people of Los Angeles and throughout the world.SMR Health is among the most comprehensive and advanced health care systems in the world. Together, SMR Health and the David Geffen School of Medicine at SMR strive every day to be a model that redefines the standard of excellence in health care. It is our integrated mission to provide state-of-the-art patient care, to train top medical professionals and to support pioneering research and discovery.
<br /> <br />
Our physicians are world leaders in the diagnosis and treatment of complex illnesses, and our hospitals are consistently ranked among the best in the nation.SMR Health Care is at the cutting edge of biomedical research, and our doctors and scientists are pioneering work across an astounding range of disciplines, from organ transplantation and cardiac surgery to neurosurgery and cancer treatment, and bringing the latest discoveries to virtually every field of medicine.
<br /> <br />
SMR Health Care is the first and only hospital to be accredited by the Joint Commission International (JCI) 5 times in a row. The JCI Gold Seal of Approval is a globally recognized and reflects an organization’s commitment to best practices in quality and patient safety. SMR Health Care was first accredited by JCI in 2008 and till date remains the only hospital in Bangladesh to hold this international recognized standard. Accreditation by recognized international institutions such as JCI are crucial to drive compliance and improve quality and cost-effectiveness across the hospitals and has become a priority for healthcare organizations across the world.
</p>
<hr />
<h3>Built for Miracles</h3>
<p>And as an academic medical center, we are able to offer our patients the latest technologies as well as access to potentially life-saving new therapies and leading-edge clinical trials. With a comprehensive array of research and clinical centers, addressing topics from stem cell biology, AIDS, gene therapy, neurosciences, women's health and geriatrics, SMR continues to define what an academic medical center can be. SMR Health's commitment to patient care, research and education means that our patients benefit from the latest diagnostic and treatment techniques in virtually every area of medicine.
<br />
And we are a committed community partner. In fact, more than 70 percent of our medical students and some 200 faculty participate in community health programs each year. Some of those programs include training Los Angeles firefighters and paramedics to treat stroke victims on-site; and addressing a multitude of child health and welfare issues at the Center for Healthier Children, Families and Communities.</p>
             </div>
<Contact></Contact>
        </div>
    );
};

export default About;