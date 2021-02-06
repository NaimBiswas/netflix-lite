import React, { Fragment, useRef } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, } from 'react-router-dom';
import { auth } from '../firebase';

import LandingNav from './LandingNav'


const LogIn = () => {
   const emailRef = useRef(null)
   const passwordRef = useRef(null)
   const history = useHistory();

   const signIn = (Event) => {
      Event.preventDefault();
      auth.signInWithEmailAndPassword(
         emailRef.current.value,
         passwordRef.current.value,
      ).then(() => {
         alert('Login Success')
         history.push('/home')
      }).catch((error) => {
         alert(error.message);
      })
   }

   return (
      <Fragment>
         <LandingNav value={true}></LandingNav>
         <div style={{ zIndex: '10' }} className="middle_content">
            <div className="col-lg-6 offset-lg-3">
               <form action="">
                  <Form.Group>

                     <div className="form_from">
                        <h2 className='text-left form-header'>Sing In</h2>
                        <Form.Control ref={emailRef} required type="email" placeholder="Email Address" />
                        <br />
                        <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                        <br />
                        <Button onClick={signIn} type='submit' className='d-block w-100 singInButton'>Sing In</Button>
                     </div>
                     <div className="text-left singupBottom">If Your Are Not A Member Of Netflix
                        <p><Link to='/registration'> Sing Up </Link></p></div>
                  </Form.Group>
               </form>

            </div>
         </div>
         <div style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            width: '100%',
            height: '900px',
            backgroundImage: `linear-gradient(0deg, rgb(197 25 25 / 30%), rgb(0 0 0)),url("https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/1b4054cd-e5f5-40a8-88d3-09428654d5ff/BD-en-20210201-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
            position: 'relative'
         }}>
         </div>
      </Fragment>
   )
}

export default LogIn
