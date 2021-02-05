import React, { Fragment, useState } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import Logo from '../Logo.svg'
import '../componentsCSS/LandingNav.css'
import { Link, Route } from 'react-router-dom'
import LogIn from './LogIn'


const LandingNav = ({ value }) => {
   const [LogIn, setLogIn] = useState(value)
   return (
      <Fragment>
         <div className="container_nav">


            <Navbar variant="dark">
               <Navbar.Brand href="/"><img className='Logo_header' src={Logo} alt="" /></Navbar.Brand>
               <Nav className="mr-auto">
               </Nav>
               {
                  LogIn ? ([

                  ]) : (
                        <Link className='nav-link text-white signInLInk' to='/login'>
                           <Button onClick={() => setLogIn(value)} className='Landing_button'>Sing In </Button></Link>
                     )
               }
            </Navbar>

         </div>

      </Fragment >
   )
}

export default LandingNav
