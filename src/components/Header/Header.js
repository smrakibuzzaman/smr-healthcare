import React from 'react';
import { Link } from 'react-router-dom';
import firstBanner from '../../images/banner/banner1.jpg'
import  './Header.css'
const Header = () => {
    return (
      <div >
          
          <div className="d-flex text-center"  style={{background: `url(${firstBanner})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', backgroundPosition: 'center top', height: '40vh',alignItems: 'flex-start'}}
 >
           <div className="m-5">

      <h1 className="title" > 
            Be Informed About
            <br />
             Covid-19
             </h1>
             <Link to="/services"> <button className="btn p-2 button">Our Services</button> </Link>
      </div>
             </div>
</div>


    
    );
};

export default Header;