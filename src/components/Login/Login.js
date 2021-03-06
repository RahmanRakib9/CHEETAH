import React, { useContext, useState } from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { Form, Button, Container } from 'react-bootstrap';
import '../../App.css'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import PassInstructions from './PassInstructions';

firebase.initializeApp(firebaseConfig);

const Login = () => {
     //state for new user
     const [newUser, setNewUser] = useState(false);
     const [user, setUser] = useState({
          userLogin: false,
          userName: '',
          userEmail: '',
          userPhoto: '',
          userPassword: '',
          userError: '',
          userSuccess: false
     })

     //use context
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);

     //for redirect user destination
     let history = useHistory();
     let location = useLocation();
     let { from } = location.state || { from: { pathname: "/" } };

     //null value
     function handleNullValue() {
          document.getElementById('userName').value = '';
          document.getElementById('userEmail').value = '';
          document.getElementById('userPassword').value = '';
     }

     //form validation using regEx
     const handleBlur = (e) => {
          let isFieldValid = true;
          if (e.target.name === 'email') {
               isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
          }
          if (e.target.name === 'password') {
               const passMinLength = e.target.value.length >= 6;
               const passContainNumber = /\d{1}/.test(e.target.value);
               isFieldValid = passMinLength && passContainNumber;
          }
          if (isFieldValid) {
               const userInfo = { ...user };
               userInfo[e.target.name] = e.target.value;
               setUser(userInfo);
          }
     }

     const handleFormSubmit = (e) => {
          //create new user
          if (user.email && user.password) {
               const auth = getAuth();
               createUserWithEmailAndPassword(auth, user.email, user.password)
                    .then((res) => {
                         const userInfo = { ...user };
                         userInfo.userSuccess = true;
                         userInfo.userError = '';
                         setUser(userInfo);
                         // handleNullValue();
                         setLoggedInUser(userInfo);
                         history.replace(from);

                    })
                    .catch((err) => {
                         const userInfo = { ...user };
                         userInfo.userSuccess = false;
                         userInfo.userError = err.message;
                         setUser(userInfo);
                    })
          }
          if (!newUser && user.email && user.password) {
               //login existing user
               const auth = getAuth();
               signInWithEmailAndPassword(auth, user.email, user.password)
                    .then((res) => {
                         const userInfo = { ...user };
                         userInfo.userSuccess = true;
                         userInfo.userError = '';
                         setUser(userInfo);
                         setLoggedInUser(userInfo);
                         history.replace(from);
                    })
                    .catch((err) => {
                         const userInfo = { ...user };
                         userInfo.userSuccess = false;
                         userInfo.userError = err.message;
                         setUser(userInfo);
                    })
          }
          e.preventDefault();
     }

     return (
          <Container>
               <div className='row d-flex justify-content-center' style={{ marginTop: '10%' }}>
                    <div className="col-md-2">
                         {newUser && <PassInstructions></PassInstructions>}
                    </div>
                    <div className="col-md-10">
                         <Form style={{ color: 'white', }} onSubmit={handleFormSubmit}>
                              {newUser && <Form.Label>Name</Form.Label>}
                              {newUser && <Form.Control type="text" name='name' required placeholder="Enter Your Name" onBlur={handleBlur} id='userName' />}
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" name='email' required placeholder="Enter Your Email" onBlur={handleBlur} id='userEmail' />
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" name='password' required placeholder="Enter Your Password" onBlur={handleBlur} id='userPassword' />
                              <Button variant='secondary' type='submit' style={{ marginTop: "10px" }}>{newUser ? 'Submit' : 'LogIn'}</Button>
                         </Form>

                         <div style={{ marginTop: "25px" }}>
                              <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id='newUser' />
                              <label htmlFor="newUser" style={{ color: 'white' }} id='newUser'>{newUser ? ' Create a account' : ' Dont have any account?'}</label>
                         </div>

                         {
                              user.userSuccess ? <p style={{ color: 'green', textAlign: 'center' }}>"Succsessfully {newUser ? 'Created' : 'LoggedIn'}!"</p> : <p style={{ color: 'red', textAlign: 'center' }}>{user.userError}</p>
                         }
                    </div>
               </div>
          </Container>
     );
};

export default Login;

