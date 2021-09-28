import React from 'react';
import { useParams } from 'react-router';

const Book = () => {
     const { vehicleType } = useParams();
     return (
          <div>
               <h1 style={{color:'white'}}>Lets Book a {vehicleType}</h1>
          </div>
     );
};

export default Book;