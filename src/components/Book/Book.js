import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Gmap from '../Gmap/Gmap';
import './Book.css';

const Destination = () => {
     const { vehicleType } = useParams();
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);

     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);
     console.log(watch("example")); // watch input value by passing the name of it

     return (
          <Container style={{ marginTop: "5%" }}>
               <div className="row">
                    <div className="col-md-4 d-flex justify-content-center">
                         <form onSubmit={handleSubmit(onSubmit)} className='ship-form'>
                              <h4 style={{ color: 'white', textAlign: "center" }}>Let's Book a {vehicleType}</h4>
                              <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
                              {errors.name && <span className='error'>Name is Required</span>}

                              <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" />
                              {errors.email && <span className='error'>Email is Required</span>}

                              <input {...register("phone", { required: true })} placeholder="Your Phone Number" />
                              {errors.phone && <span className='error'>Phone Number is Required</span>}

                              <input type="submit" />
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
// {/*
// <h2>howdy {loggedInUser.email}</h2> */}