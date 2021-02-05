import React, { Fragment } from 'react'
import '../componentsCSS/LandingPageBanner.css'
const LandingPageBanner = () => {





   return (
      <Fragment>
         <div style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            width: '100%',
            height: '100vh',
            backgroundImage: `linear-gradient(0deg, rgb(197 25 25 / 30%), rgb(0 0 0)),url("https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/1b4054cd-e5f5-40a8-88d3-09428654d5ff/BD-en-20210201-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
            position: 'relative'

         }}>

         </div>
      </Fragment>
   )
}

export default LandingPageBanner
