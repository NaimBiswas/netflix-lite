import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
   return (
      <Fragment>
         <div className="App">
            <Router></Router>
            <Home></Home>


         </div>
      </Fragment>

   );
}

export default App;
