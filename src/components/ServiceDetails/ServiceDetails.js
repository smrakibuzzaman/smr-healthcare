import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';


const ServiceDetails = () => {
   const {serviceId} = useParams();
  

   const [serviceDetail, setServiceDetail] = useState([]);
   

   useEffect( ()=>{
    fetch("/services.json")
    .then(res=>res.json())
    .then(data=>setServiceDetail(data));
},[])

const details = serviceDetail.find(detail=>detail.id === serviceId );

    return (
        <div>
    
      <div className="container m-5">
          <img src={details?.image} alt="" srcset="" />
          <h1 className="text-secondary fw-bold"> {details?.name} </h1>
          <h5> {details?.initial} </h5>
          <p>{details?.description}</p>
      </div>

        </div>
    );
};

export default ServiceDetails;