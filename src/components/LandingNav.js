import React, { Fragment } from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import Logo from '../Logo.svg'
const LandingNav = () => {
   return (
      <Fragment>
         <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
               <FormControl type="text" placeholder="Search" className="mr-sm-2" />
               <Button variant="outline-info">Search</Button>
            </Form>
         </Navbar>
      </Fragment>
   )
}

export default LandingNav
