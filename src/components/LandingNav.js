import React, { Fragment } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import Logo from '../Logo.svg'
import '../componentsCSS/LandingNav.css'
const LandingNav = () => {
   return (
      <Fragment>
         <div className="container_nav">
            <Navbar variant="dark">
               <Navbar.Brand href="#home"><img className='Logo_header' src={Logo} alt="" /></Navbar.Brand>
               <Nav className="mr-auto">
               </Nav>
               <Button>Sing In</Button>
            </Navbar>

         </div>

      </Fragment>
   )
}

export default LandingNav
