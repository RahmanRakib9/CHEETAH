import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import '../../App.css'
import Vehicle from './Vehicle/Vehicle';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
     const [vehicles, setVehicles] = useState([]);

     //load data
     useEffect(() => {
          setVehicles(fakeData)
     }, [])

     return (
          <Container className='App App-header ' >
               <h1 style={{ color: 'white' }}>REACH YOUR DESTINATION WITH 100% SURE AND SAFE</h1>
               <h6 style={{ color: 'white' }}>We Will Take Care Of Your Time</h6>
               <Row className=' row-cols-1 row-cols-md-3 mx-1'>
                    {
                         vehicles.map(x => <Vehicle x={x} key={x.id}></Vehicle>)
                    }
               </Row>
          </Container>

     );
};

export default Home;
