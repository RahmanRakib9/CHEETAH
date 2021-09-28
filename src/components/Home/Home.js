import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import '../../App.css'
import Vehicle from './Vehicle/Vehicle';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
     const [vehicles, setVehicles] = useState([

     ]);
     useEffect(() => {
          setVehicles(fakeData)
     }, [])
     return (
          <Container className='App App-header' style={{width:'100%'}}>
               <Row >
                    {
                         vehicles.map(x => <Vehicle x={x} key={x.id}></Vehicle>)
                    }
               </Row>
          </Container>

     );
};

export default Home;
{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
</header>
</div> */}