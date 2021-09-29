import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { Form, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../../App.css'

firebase.initializeApp(firebaseConfig);


const Login = () => {

     const [user, setUser] = useState({
          userLogin: false,
          userName: '',
          userEmail: '',
          userPhoto: '',
          userPassword: '',
          userError: '',
          userSuccess: false
     })

     const GoogleSignIn = () => {
          const provider = new GoogleAuthProvider();
          const auth = getAuth();
          signInWithPopup(auth, provider)
               .then((res) => {
                    const { displayName, email, photoURL } = res.user;
                    setUser({
                         userLogin: true,
                         userName: displayName,
                         userEmail: email,
                         userPhoto: photoURL
                    })
               })
     }

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
          if (user.email && user.password) {
               const auth = getAuth();
               createUserWithEmailAndPassword(auth, user.email, user.password)
                    .then((res) => {
                         const userInfo = { ...user };
                         userInfo.userSuccess = true;
                         userInfo.userError = '';
                         setUser(userInfo);
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
          <div style={{ marginTop: "5%" }}>
               <Container>
                    <Form style={{ color: 'white' }} onSubmit={handleFormSubmit}>
                         <Form.Label>Name</Form.Label>
                         <Form.Control type="text" name='name' required placeholder="Enter Your Name" onBlur={handleBlur} />
                         <Form.Label>Email</Form.Label>
                         <Form.Control type="email" name='email' required placeholder="Enter Your Email" onBlur={handleBlur} />
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" name='password' required placeholder="Enter Your Password" onBlur={handleBlur} />
                         <Button variant='secondary' type='submit' style={{ marginTop: "10px" }}>Submit</Button>
                    </Form>
                    {
                         user.userSuccess ? <p style={{ color: 'green', textAlign: 'center' }}>"Succsessfully Created!"</p> : <p style={{ color: 'red', textAlign: 'center' }}>{user.userError}</p>
                    }
               </Container>
               <p style={{ textAlign: 'center', color: 'white' }}>OR</p>
               <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={GoogleSignIn} ><FontAwesomeIcon icon={faGoogle} /> Login With Google</button>
               </div>
          </div>
     );
};

export default Login;
// <button onClick={GoogleSignIn}>Login With Google</button>
// {
//      user.userLogin && <div>
//           <h1>How are you doing {user.userName} ?</h1>
//           <img src={user.userPhoto} alt="" />
//           <p>{user.userEmail}</p>
//      </div>
// }
