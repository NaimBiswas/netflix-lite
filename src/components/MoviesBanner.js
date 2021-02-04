import axios from '../axios'
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import '../componentsCSS/Banner.css'
import request from '../Request'

const MoviesBannger = () => {
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

   }, []);

   function truncate(string, n) {
      return string?.length > n ? string.substr(0, n - 1) + '...' : string;
   }
   return (
      <Fragment>
         <div style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            height: '420px',
            backgroundImage: `linear-gradient(0deg, rgb(197 25 25 / 30%), rgb(0 0 0)),url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            position: 'relative'
         }} className="banner">

            {/* Bannger Ttilte  */}
            <div className="banner_content">
               <h1 style={{ color: "#E50914", fontWeight: '800', fontSize: "40px" }}>All MOVIES</h1>
               <h2 className='text-white movie-name'>{movie?.name || movie?.title || movie?.original_name}</h2>
               <div className="banner_button mt-1">
                  <Button variant='custom-button'>Play Now</Button>
                  <Button variant='custom-button'>My List</Button>
               </div>
               <div className="banger_discription">
                  <p className='text-white mt-2'>
                     {truncate(movie?.overview, 220)}
                  </p>
               </div>
            </div>
         </div>
      </Fragment >
   )
}

export default MoviesBannger
