import React from 'react';
import { Card, Button, Col, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import '../../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const Vehicle = (props) => {
     const { img, name, capacity, price,description } = props.x;
     const history = useHistory();
     const handleClick = (vehicleId) => {
          history.push(`/book/${vehicleId}`)
     }
     return (
          <Container >
               <Col className='d-flex justify-content-center align-items-center'>

                    <Card style={{ width: '22rem', marginTop: "3%",height:'28rem' }} >
                         <Card.Img variant="top" src={img} style={{ width: "100%", height: "250px" }} />
                         <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>
                                   <small>{description}</small>
                                   <h3><FontAwesomeIcon icon={faUsers} />: {capacity}</h3>
                              </Card.Text>
                              <Button variant="secondary" onClick={() => handleClick(name)}>Book Now</Button>
                         </Card.Body>
                    </Card>

               </Col>
          </Container>

     );
};

export default Vehicle;
//className='d-flex align-items-center justify-content-center'