import { Button, Form } from 'react-bootstrap'
import React, { Fragment, useState } from 'react'
import '../componentsCSS/LandingPageBanner.css'
import { Link } from 'react-router-dom'
const LandingPageBanner = (value) => {

   const [singIn, setSingIn] = useState(false)



   return (
      <Fragment>
         {
            !value.false ? ([
               <div style={{ zIndex: '10' }} className="middle_content">
                  <div className="col-lg-6 offset-lg-3">
                     <Form.Group>

                        <div className="col-lg-10 offset-lg-1">
                           <h2 className='text-left form-header'>Sing In</h2>
                           <Form.Control type="text" placeholder="Email Address" />
                           <br />
                           <Form.Control type="password" placeholder="Password" />
                           <br />
                           <Button className='d-block w-100 singInButton'>Sing In</Button>
                        </div>
                     </Form.Group>
                  </div>
               </div>
            ]) : ([
               <div className="middle_content">
                  <h2>
                     Unlimited movies, TV shows, and more
                   </h2>
                  <h3>
                     Watch anywhere. Cancel anytime.
                  </h3>
                  <div className="seacrc_section">
                     <div className="mt-4 seacrch-contect">
                        Ready to watch? Enter your email to create or restart your membership.
                  </div>
                     <div className="search_bar">
                        <input type="text" placeholder='Email Address' />
                        <Button onClick={() => setSingIn(true)} className='Get_started'><Link className='nav-link text-white' to='/login'> GET STARTED </Link></Button>
                     </div>
                  </div>
               </div>


            ])
         }
         <div style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            width: '100%',
            height: '700px',
            backgroundImage: `linear-gradient(0deg, rgb(197 25 25 / 30%), rgb(0 0 0)),url("https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/1b4054cd-e5f5-40a8-88d3-09428654d5ff/BD-en-20210201-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
            position: 'relative'
         }}>
         </div>
      </Fragment>
   )
}

export default LandingPageBanner
