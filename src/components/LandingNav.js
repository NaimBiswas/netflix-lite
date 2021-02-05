import React, { Fragment, useState } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import Logo from '../Logo.svg'
import '../componentsCSS/LandingNav.css'
import { Link, Route } from 'react-router-dom'
import LogIn from './LogIn'


const LandingNav = (value) => {
   return (
      <Fragment>
         <div className="container_nav">


            <Navbar variant="dark">
               <Navbar.Brand href="/"><img className='Logo_header' src={Logo} alt="" /></Navbar.Brand>
               <Nav className="mr-auto">
               </Nav>
               {
                  !value.ture ? ([

                  ]) : (
                        <Button className='Landing_button'><Link className='nav-link text-white signInLInk' to='/login'>Sing In </Link></Button>
                     )
               }


            </Navbar>

         </div>

      </Fragment >
   )
}

export default LandingNav
