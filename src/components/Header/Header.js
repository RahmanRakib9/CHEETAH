import React, { useContext } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
     const linkActiveStyle = {
          color: 'white',
          marginLeft: '30px',
          fontWeight: "bold",
          textDecoration: 'none'
     }
     //use context
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
     return (
          <Container>
               <Navbar >

                    <NavLink to="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>CHEETAH</NavLink>
                    <Nav >
                         <NavLink to="/home" style={linkActiveStyle}>Home</NavLink>
                         <NavLink to="/login" style={linkActiveStyle}>Sign in</NavLink>
                         {
                              loggedInUser.email && <button id='btnStyle' onClick={() => setLoggedInUser({})}>Sign Out</button>
                         }

                    </Nav>

               </Navbar>
          </Container>
     );
};

export default Header;