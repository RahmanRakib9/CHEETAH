import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
     const linkActiveStyle = {
          color: 'white',
          marginLeft: '10%',
          fontWeight: "bold",
          textDecoration:'none'
     }
     return (
          <Navbar >
               <Container>
                    <NavLink to="/" style={{color:'white',fontWeight:'bold',textDecoration:'none'}}>CHEETAH</NavLink>
                    <Nav >
                         <NavLink to="/home" style={linkActiveStyle}>Home</NavLink>
                         <NavLink to="/login" style={linkActiveStyle}>Login</NavLink>
                         <NavLink to="/destination" style={linkActiveStyle}>Destination</NavLink>
                    </Nav>
               </Container>
          </Navbar>
     );
};

export default Header;