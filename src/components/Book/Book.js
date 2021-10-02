import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Gmap from '../Gmap/Gmap';
import './Book.css';
import giphy from '../../image/giphy.gif';

const Destination = () => {
     const { vehicleType } = useParams();
     const [loggedInUser, setLoggedInUser] = useContext(UserContext); //use context

     const { register, handleSubmit, watch, formState: { errors } } = useForm(); //hook form

     //form input validation
     const onSubmit = data => {
          if (data.name && data.email && data.phone) {
               document.getElementById('bookingPage').style.display = 'none';
               document.getElementById('id').style.display = 'block';
          }
     }

     return (
          <Container style={{ marginTop: "5%" }}>

               {/* display confirmation message */}
               <div style={{ display: 'none', textAlign: 'center', marginBottom: '100px' }} id='id'>
                    <h3 style={{ color: 'white', textAlign: 'center' }}>Congratulations  Your {vehicleType} is on the way,till then please wait</h3>
                    <img src={giphy} style={{ width: '100%', height: "600px" }} alt="" />
               </div>

               {/* react hook form && google map */}
               <div className="row" id='bookingPage'>
                    <div className="col-md-4 d-flex justify-content-center">
                         <form onSubmit={handleSubmit(onSubmit)} className='ship-form'>
                              <h4 style={{ color: 'white', textAlign: "center" }}>Let's Book a {vehicleType}</h4>
                              <input defaultValue={loggedInUser.name || loggedInUser.userName} {...register("name", { required: true })} placeholder="Your Name" />
                              {errors.name && <span className='error'>Name is Required</span>}

                              <input defaultValue={loggedInUser.email || loggedInUser.userEmail} {...register("email", { required: true })} placeholder="Your Email" />
                              {errors.email && <span className='error'>Email is Required</span>}

                              <input {...register("phone", { required: true })} placeholder="Your Phone Number" />
                              {errors.phone && <span className='error'>Phone Number is Required</span>}

                              <input type="submit" id='submitBtn' />
                         </form>
                    </div>
                    <div className="col-md-8 d-flex justify-content-center">
                         <Gmap />
                    </div>
               </div>
          </Container>
     );
};

export default Destination;
