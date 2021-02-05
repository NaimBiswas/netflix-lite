import React, { Fragment } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import Logo from '../Logo.svg'
import '../componentsCSS/LandingNav.css'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
const LandingNav = () => {
   return (
      <Fragment>
         <div className="container_nav">
            <Navbar variant="dark">
               <Navbar.Brand href="#home"><img className='Logo_header' src={Logo} alt="" /></Navbar.Brand>
               <Nav className="mr-auto">
               </Nav>
               <Router>
                  <Route>
                     <Link to='/login'><Button className='Landing_button'> Sing In </Button></Link>
                  </Route>
               </Router>
            </Navbar>
         </div>

      </Fragment>
   )
}

export default LandingNav
