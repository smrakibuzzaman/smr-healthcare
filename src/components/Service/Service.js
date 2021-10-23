import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id,name, image, initial} = props.service;
    return (
        
                 <div className="col-md-6">
                                <div className="item-box">
                                    <div className="service-pic mt-3">
                                        <img className="card-img-top" style={{ width: "300px", height: "200px" }} src={image} alt="" />
                                    </div>
                                    <div className="card-body g-5">
                                    <h4>{name}</h4>
                                    <h5> {initial} </h5>
                                    <Link to={`/service/${id}`}> <button className="btn btn-primary">Details</button> </Link>
                                    </div>
                                  
                                </div>
                            </div>
                   
       
    );
};

export default Service;