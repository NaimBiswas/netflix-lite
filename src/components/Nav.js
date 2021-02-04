import React, { Fragment, useEffect, useState } from 'react'
import { Navbar, Nav, } from 'react-bootstrap'
import Logo from '../Logo.svg'
import '../componentsCSS/Nav.css'
const NavMenu = () => {
   const [show, handleShow] = useState(false);
   const transitionNavBar = () => {
      if (window.scrollY > 100) {
         handleShow(true);

      } else {
         handleShow(false);
      }

   }
   useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
      return () => window.addEventListener("scroll", transitionNavBar)
   }, [])
   return (
      <Fragment>
         <div className="header">
            <Navbar className={`nav ${show && 'nav_bg'}`} expand="lg">
               <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                     <Nav.Link className=' nav-color' href="#home">Home</Nav.Link>
                     <Nav.Link className='nav-color' href="#link">Tv Shows</Nav.Link>
                     <Nav.Link className=' nav-color' href="#link">Movies</Nav.Link>
                     <Nav.Link className='nav-color' href="#link">Recently Added</Nav.Link>
                     <Nav.Link className='nav-color' href="#link">My List</Nav.Link>
                  </Nav>
                  <Nav>
                     <Nav.Link className='nav-color'> KID</Nav.Link>
                     <Nav.Link className='nav-color'> DVD</Nav.Link>
                     <img className='right-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </div>
      </Fragment >
   )
}

export default NavMenu
