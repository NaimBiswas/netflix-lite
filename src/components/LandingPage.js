import React, { Fragment } from 'react'
import LandingNav from './LandingNav'
import LandingPageBanner from './LandingPageBanner'
import '../componentsCSS/LandingPage.css'

const LandingPage = () => {
   return (
      <Fragment>
         <LandingNav></LandingNav>
         <LandingPageBanner></LandingPageBanner>

         <section className='mt-3'>
            <div className="container">
               <div className="row">
                  <div className="col-lg-7 second_section">
                     <h2>Enjoy on your TV.</h2>
                     <p>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more
                     </p>
                  </div>
                  <div className="col-lg-5">
                     <div className="our-story-card-img-container">
                        <div className="our-story-card-animation-container">
                           <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img" />
                           <div className="our-story-card-animation">

                              <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="">
                                 <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                              </video>
                              <div className="our-story-card-animation-text">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Fragment>
   )
}

export default LandingPage
