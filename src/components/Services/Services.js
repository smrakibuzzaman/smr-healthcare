import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Service.css'

const Services = () => {
    const [allService, setAllService] = useState([]);
    useEffect( ()=>{
        fetch("/services.json")
        .then(res=>res.json())
        .then(data=>setAllService(data));
    },[])
    return (
      <div>
          
            <div className="container">
            <h1 className="text-secondary fw-bold">Services</h1>

                <div className="row">
                    {
                        allService.map(service => (
                       <Service key={service.id} service={service}></Service>
                        ))
                    }
                </div>
          
        </div>
        <Contact></Contact>
      </div>
    );
};

export default Services;