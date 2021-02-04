import { Fragment } from 'react';
import './App.css';
import NavMenu from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import request from './Request'
import Row from './components/Row';

function App() {
   return (
      <Fragment>
         <div className="App">
            {/* nav  */}
            <NavMenu></NavMenu>
            {/* baner  */}
            <Banner></Banner>
            {/* Home  */}
            <Row title='Treanding Now' fetchUrl={request.fetchTrending} isLargeRow></Row>
            <Row title='Top Rated Movies' fetchUrl={request.fetchTopRated}></Row>
            <Row title='Action Movies' fetchUrl={request.fetchActionMovies}></Row>
            <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies}></Row>
            <Row title='Horrom Movies' fetchUrl={request.fetchHorrorMovies}></Row>
            <Row title='Romactic Movie' fetchUrl={request.fetchRomanticMovies}></Row>
            <Row title='Coumentaries' fetchUrl={request.fetchDocumertaries}></Row>

         </div>
      </Fragment>

   );
}

export default App;
