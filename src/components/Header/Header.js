import React, { useContext } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'
import { useHistory, useLocation } from 'react-router';


const Header = () => {
     const linkActiveStyle = {
          color: 'white',
          marginLeft: '30px',
          fontWeight: "bold",
          textDecoration: 'none'
     }
     //use context
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     const history = useHistory();
     const handleSignUp = () => {
          history.push('/login')
     }

     return (
          <Container>
               <Navbar >

                    <NavLink to="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>CHEETAH</NavLink>
                    <Nav >
                         <NavLink to="/home" style={linkActiveStyle}>Home</NavLink>
                         <NavLink to="/login" style={linkActiveStyle}>Sign in</NavLink>
                         {/* <NavLink to="/login" style={linkActiveStyle}>Log Out</NavLink> */}
                          {
                              loggedInUser.email ? <button id='btnStyle' onClick={() => setLoggedInUser({})}>SignOut</button> : <button id='btnStyle' onClick={handleSignUp}>Sign up</button>
                         } 
                        {/* <button id='btnStyle'> <p style={{ color: 'white' }}>{loggedInUser.email}</p></button> */}
                    </Nav>

               </Navbar>
          </Container>
     );
};

export default Header;