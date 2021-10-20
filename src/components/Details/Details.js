import React, { useEffect } from 'react';
import { useParams } from 'react-router';


const Details = ({detail}) => {
    
    const {serviceDescription} = useParams();
   
    return (
        <div>
           <h1>{serviceDescription}</h1>
        </div>
    );
};

export default Details;