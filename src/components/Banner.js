import axios from '../axios'
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import '../componentsCSS/Banner.css'
import request from '../Request'

const Banner = () => {
   const [movie, setMovie] = useState([]);
   useEffect(() => {
      async function fetchData() {
         const Request = await axios.get(request.fetchNetflixOrginals);
         setMovie(
            Request.data.results[
            Math.floor(Math.random() * Request.data.results.length - 1)
            ],
         );
         return Request;
      };
      fetchData()

   }, [])

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
               <h2 className='text-white movie-name'>{movie.name}</h2>
               <div className="banner_button mt-1">
                  <Button variant='custom-button'>Play</Button>
                  <Button variant='custom-button'>My List</Button>
               </div>
               <div className="banger_discription">
                  <p className='text-white mt-2'>
                     {truncate(movie.overview, 220)}
                  </p>
               </div>
            </div>
         </div>
      </Fragment >
   )
}

export default Banner
