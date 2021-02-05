import { Button } from 'react-bootstrap'
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
            <div className="middle_content">
               <h2>
                  Unlimited movies, TV shows, and more
            </h2>
               <h3>
                  Watch anywhere. Cancel anytime.
            </h3>
               <div className="seacrc_section">
                  <div className="mt-4 seacrch-contect">
                     Ready to watch? Enter your email to create or restart your membership.
               </div>
                  <div className="search_bar">
                     <input type="text" placeholder='Email Address' />
                     <Button className='Get_started'>GET STARTED</Button>
                  </div>
               </div>
            </div>

         </div>
      </Fragment>
   )
}

export default LandingPageBanner
