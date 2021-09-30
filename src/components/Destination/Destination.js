import React from 'react';
import { useParams } from 'react-router';

const Destination = () => {
     const { vehicleType } = useParams();
     return (
          <div>
               <h1 style={{color:'white'}}>Lets Book a {vehicleType}</h1>
               <h1>here your destination!</h1>
          </div>
     );
};

export default Destination;