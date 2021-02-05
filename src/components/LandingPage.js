import React, { Fragment, useState } from 'react'
import LandingNav from './LandingNav'
import LandingPageBanner from './LandingPageBanner'
import '../componentsCSS/LandingPage.css'

const LandingPage = () => {
   const [singIn, setsingIn] = useState(false)
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

                              <video className="our-story-card-video" autoPlay playsInline muted loop>
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

         <section className='mt-3'>
            <div className="container">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="our-story-card-img-container">
                        <div className="our-story-card-animation-container">
                           <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img" />
                           <div className="our-story-card-animation">

                              <video className="our-story-card-video" autoPlay playsInline muted loop>
                                 <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                              </video>
                              <div className="our-story-card-animation-text">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-7 second_section">
                     <h2>Download your shows to watch offline.</h2>
                     <p>
                        Save your favorites easily and always have something to watch.
                     </p>
                  </div>

               </div>
            </div>
         </section>

         <section className='mt-3'>
            <div className="container">
               <div className="row">

                  <div className="col-lg-7 second_section">
                     <h2>Watch everywhere.</h2>
                     <p>
                        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
                     </p>
                  </div>

                  <div className="col-lg-5">
                     <div className="our-story-card-img-container">
                        <div className="our-story-card-animation-container">
                           <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img" />
                           <div className="our-story-card-animation">

                              <video className="our-story-card-video" autoPlay playsInline muted loop>
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


         <section className='mt-3'>
            <div className="container">
               <div className="row">
                  <div className="col-lg-3">
                     <ul>
                        <li className='nav'><a className='nav-link nav-link-color' href="#">Questions? Contact us.</a></li>

                        <li className='nav'><a className='nav-link nav-link-color' href="#">Center Center</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#">Account</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#"> Media</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#">   Investor</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#">Relations</a></li>
                     </ul>
                  </div>
                  <div className="col-lg-3">
                     <ul>
                        <li className='nav'><a className='nav-link nav-link-color' href="#">  Netflix Originals</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#">  Legal Notices</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#">FAQ</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#"> Netflix Bangladesh</a></li>
                     </ul>
                  </div>
                  <div className="col-lg-3">
                     <ul>

                        <li className='nav'><a className='nav-link nav-link-color' href="#"> Cookie Preferences</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#"> Corporate Information</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#"> Contact Us</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#"> Speed Test</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#">Help</a></li>
                     </ul>
                  </div>
                  <div className="col-lg-3">
                     <ul>

                        <li className='nav'><a className='nav-link nav-link-color' href="#">Jobs</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#">Ways to Watch</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#">Terms of Use</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#"> Privacy</a></li>
                        <li className='nav'><a className='nav-link nav-link-color' href="#">Help</a></li>


                     </ul>
                  </div>


               </div>
            </div>
         </section>








      </Fragment>
   )
}

export default LandingPage
