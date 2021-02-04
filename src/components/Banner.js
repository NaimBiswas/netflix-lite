import React from 'react'
import { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import '../componentsCSS/Banner.css'

const Banner = () => {
   function truncate(string, n) {
      return string.length > n ? string.substr(0, n - 1) + '...' : string;
   }
   return (
      <Fragment>
         <div style={{
            backgroundSize: 'cover',
            height: '400px',
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),url("https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/653cx-EWNZ395Y1HZ-Full-Image_GalleryBackground-en-US-1594143812826._SX1080_.jpg")`,
            position: 'relative'
         }} className="banner">

            {/* Bannger Ttilte  */}
            <div className="banner_content">
               <h2 className='text-white movie-name'>This is Your Movie Title </h2>
               <div className="banner_button mt-1">
                  <Button variant='custom-button'>Play</Button>
                  <Button variant='custom-button'>My List</Button>
               </div>
               <div className="banger_discription">
                  <p className='text-white mt-2'>
                     {truncate('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis ex dolores laudantium unde autem error cupiditate debitis placeat id. Laboriosam fugit nesciunt error perspiciatis, aliquid voluptate? Aliquam, commodi cum.', 220)}
                  </p>
               </div>
            </div>
         </div>
      </Fragment >
   )
}

export default Banner
