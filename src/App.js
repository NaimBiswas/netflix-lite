import { Fragment, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import RecentlryAdded from './components/RecentlyAdded';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MyList from './components/MyList';
import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import SingUp from './components/SingUp';
import { auth } from './firebase';

function App() {
   const user = false;
   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
         if (userAuth) {
            const user = true;
         } else {

         }
      })
      return unsubscribe();

   }, [])
   return (
      <Fragment>
         <div className="App">

            <Router>

               {
                  !user ? ([
                     <Route exact path='/' component={LandingPage} >
                     </Route>,
                     <Route path='/login' component={LogIn}></Route>,
                     <Route path='/registration' component={SingUp}></Route>

                  ]) : ([
                     <Route exact path='/' component={Home} ></Route>,
                     <Route path='/movies' component={Movies}></Route>,
                     <Route path='/tv-shows' component={TvShows}></Route>,
                     <Route path='/recently-added' component={RecentlryAdded}></Route>,
                     <Route path='/my-list' component={MyList}></Route>,
                  ])
               }

            </Router>
         </div>
      </Fragment >
   );
}

export default App;
