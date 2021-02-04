import React, { Fragment, useEffect, useState } from 'react'
import { Navbar, Nav, } from 'react-bootstrap'
import Logo from '../Logo.svg'
import '../componentsCSS/Nav.css'
import { Link } from 'react-router-dom'
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
               <Link to='/'><Navbar.Brand><img src={Logo} alt="" /></Navbar.Brand></Link>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                     <Nav.Link className=' nav-color' ><Link className='nav-link nav-color' to='/'>Home</Link> </Nav.Link>
                     <Nav.Link className='nav-color' ><Link className='nav-link nav-color' to='javscript:avoid(0)'>Tv Shows</Link></Nav.Link>
                     <Nav.Link className=' nav-color' ><Link className='nav-link nav-color' to='/movies'>Movies</Link></Nav.Link>
                     <Nav.Link className='nav-color' ><Link className='nav-link nav-color' to='/recently-added'>Recently Added</Link></Nav.Link>
                     <Nav.Link className='nav-color' ><Link className='nav-link nav-color' to='/my-list'>My List</Link></Nav.Link>
                  </Nav>
                  <Nav>
                     <Nav.Link className='nav-color'> KID</Nav.Link>
                     <Nav.Link className='nav-color pr-4'> DVD</Nav.Link>
                     <img className='right-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </div>
      </Fragment >
   )
}

export default NavMenu
