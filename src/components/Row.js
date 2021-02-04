
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import axios from '../axios'
import '../componentsCSS/Row.css'
function Row({ title, fetchUrl, isLargeRow = false }) {
   const [movies, setMovie] = useState([]);
   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(fetchUrl)
         setMovie(request.data.results);
         return request;
      };
      fetchData();
   }, [fetchUrl]);
   const base_url = `https://image.tmdb.org/t/p/original`
   console.log(movies);
   return (
      <Fragment>
         <div className="Row">
            <h2 className='text-white'>{title}</h2>
            <div className="row_posters">
               {
                  movies.map((move) => [
                     <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? move.poster_path : move.backdrop_path
                        }`} alt={move.name} />,


                  ])
               }
            </div>

         </div>
      </Fragment >
   )
}

export default Row
