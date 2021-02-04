import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import request from '../Request'
import Footer from './Footer'
const Home = () => {
   return (
      <div>
         <Nav></Nav>
         <Banner></Banner>
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

export default Home
