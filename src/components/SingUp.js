import React from 'react'
import LandingNav from './LandingNav'
import LandingPageBanner from './LandingPageBanner'
import '../componentsCSS/LandingPageBanner.css'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const SingUp = () => {
   return (
      <div>
         <LandingNav></LandingNav>
         <div className="">
            <div style={{ zIndex: '10' }} className="middle_content">
               <div className="col-lg-6 offset-lg-3">
                  <Form.Group>

                     <div className="form_from">
                        <h2 className='text-left form-header'>Sing In</h2>
                        <Form.Control type="text" placeholder="Full Name" />
                        <br />
                        <Form.Control type="text" placeholder="Email Address" />
                        <br />
                        <Form.Control type="password" placeholder="Password" />
                        <br />
                        <Form.Control type="password" placeholder="Confirm Password" />
                        <br />

                        <Button className='d-block w-100 singInButton'>Sing Up</Button>
                     </div>
                     <div className="text-left singupBottom">If Your Are Not A Member Of Netflix

                        <p><Link to='/login'> Log In </Link></p></div>
                  </Form.Group>
               </div>
            </div>
         </div>
         <div style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            width: '100%',
            height: '1000px',
            backgroundImage: `linear-gradient(0deg, rgb(197 25 25 / 30%), rgb(0 0 0)),url("https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/1b4054cd-e5f5-40a8-88d3-09428654d5ff/BD-en-20210201-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
            position: 'relative'
         }}></div>
      </div>
   )
}

export default SingUp
