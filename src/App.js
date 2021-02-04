import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
   return (
      <Fragment>
         <div className="App">
            <Router>
               <Route exact path='/' component={Home} ></Route>

            </Router>


         </div>
      </Fragment>

   );
}

export default App;
