import React, { Fragment } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import Logo from '../Logo.svg'
import '../componentsCSS/LandingNav.css'
import { Link, Route } from 'react-router-dom'


const LandingNav = () => {
   return (
      <Fragment>
         <div className="container_nav">
            <Navbar variant="dark">
               <Navbar.Brand href="/"><img className='Logo_header' src={Logo} alt="" /></Navbar.Brand>
               <Nav className="mr-auto">
               </Nav>

               <Button className='Landing_button'><Link className='nav-link text-white signInLInk' to='/login'>Sing In </Link></Button>

            </Navbar>
         </div>

      </Fragment >
   )
}

export default LandingNav
