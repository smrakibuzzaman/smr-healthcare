import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import './Service.css'

const Services = () => {
    const [allService, setAllService] = useState([]);
    useEffect( ()=>{
        fetch("/services.json")
        .then(res=>res.json())
        .then(data=>setAllService(data));
    },[])
    return (
        <div className="container">
            <h1 className="text-secondary fw-bold">Services</h1>

                <div className="row">
                    {
                        allService.map(service => (
                            <div className="col-md-6">
                                <div className="item-box">
                                    <div className="service-pic mt-3">
                                        <img className="card-img-top" style={{ width: "300px", height: "200px" }} src={service.image} alt="" />
                                    </div>
                                    <div className="card-body g-5">
                                    <h4>{service.name}</h4>
                                    <h5> {service.initial} </h5>
                                    <Link to={`/services/${service.id}`}> <button className="btn btn-primary">Details</button> </Link>
                                    </div>
                                  
                                </div>
                            </div>
                        ))
                    }
                </div>
            <Contact></Contact>
        </div>
    );
};

export default Services;