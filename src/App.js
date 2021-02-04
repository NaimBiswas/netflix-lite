import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import RecentlryAdded from './components/RecentlyAdded';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MyList from './components/MyList';

function App() {
   return (
      <Fragment>
         <div className="App">
            <Router>
               <Route exact path='/' component={Home} ></Route>
               <Route path='/movies' component={Movies}></Route>
               <Route path='/tv-shows' component={TvShows}></Route>
               <Route path='/recently-added' component={RecentlryAdded}></Route>
               <Route path='/my-list' component={MyList}></Route>
            </Router>
         </div>
      </Fragment>
   );
}

export default App;
