import React from 'react'
import { Fragment } from 'react'
import request from '../Request'
import Banner from './Banner'
import Footer from './Footer'
import MoviesBannger from './MoviesBanner'
import Nav from './Nav'
import Row from './Row'
const RecentlyAdded = () => {
   return (
      <div>
         <Nav ></Nav>
         <MoviesBannger></MoviesBannger>
         <Row title='Netflix Trending' fetchUrl={request.fetchNetflixOrginals} isLargeRow></Row>
         <Row title='Treanding Now' fetchUrl={request.fetchTrending} isLargeRow></Row>
         <Row title='Top Rated Movies' fetchUrl={request.fetchTopRated}></Row>
         <Row title='Action Movies' fetchUrl={request.fetchActionMovies}></Row>
         <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies}></Row>
         <Row title='Horrom Movies' fetchUrl={request.fetchHorrorMovies}></Row>
         <Row title='Romactic Movie' fetchUrl={request.fetchRomanticMovies}></Row>
         <Row title='Coumentaries' fetchUrl={request.fetchDocumertaries}></Row>
         <Footer></Footer>
      </div>
   )
}

export default RecentlyAdded
