import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
          userPhoto: ''
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

     return (
          <div style={{ marginTop: "5%" }}>
               <Container >
                    <Form style={{ color: 'white' }}>
                         <Form.Label>Name</Form.Label>
                         <Form.Control type="text" placeholder="Enter Your Name" />
                         <Form.Label>Email</Form.Label>
                         <Form.Control type="email" placeholder="Enter Your Email" />
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" placeholder="Enter Your Password" />
                         <Button variant='secondary' style={{ marginTop: "10px" }}>Submit</Button>
                    </Form>
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
