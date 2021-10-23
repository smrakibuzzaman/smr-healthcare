import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';


const ServiceDetails = () => {
   const {serviceId} = useParams();
   console.log(serviceId);

   const [serviceDetail, setServiceDetail] = useState([]);
   console.log(serviceDetail);

   useEffect( ()=>{
    fetch("/services.json")
    .then(res=>res.json())
    .then(data=>setServiceDetail(data));
},[])

const details = serviceDetail.find(detail=>detail.id === serviceId );
console.log(details);
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