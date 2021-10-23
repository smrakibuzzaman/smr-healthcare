import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
           <Header> </Header>
<div className=" container ">
    <h1 className="text-secondary fw-light">
    SMR Health Care is the first and only hospital to be accredited by the Joint Commission International (JCI) 5 times in a row. The JCI Gold Seal of Approval is a globally recognized and reflects an organization’s commitment to best practices in quality and patient safety. SMR Health Care was first accredited by JCI in 2008 and till date remains the only hospital in Bangladesh to hold this international recognized standard. Accreditation by recognized international institutions such as JCI are crucial to drive compliance and improve quality and cost-effectiveness across the hospitals and has become a priority for healthcare organizations across the world.
    </h1>
    </div>
           <Services> </Services>
           
          
         
        </div>
    );
};

export default Home;