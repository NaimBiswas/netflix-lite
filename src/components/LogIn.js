import React, { Fragment } from 'react'
import LandingNav from './LandingNav'
import LandingPageBanner from './LandingPageBanner';

const LogIn = () => {
   const LogIn = false;
   return (
      <Fragment>
         <LandingNav value={true}></LandingNav>
         <LandingPageBanner value={true}></LandingPageBanner>

         <h3 className='text-white'>This is login Scream</h3>
      </Fragment>
   )
}

export default LogIn
