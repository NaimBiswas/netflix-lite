import { Fragment } from 'react';
import './App.css';
import NavMenu from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';


function App() {
   return (
      <Fragment>
         <div className="App">
            {/* nav  */}
            <NavMenu></NavMenu>
            {/* baner  */}
            <Banner></Banner>
            {/* Home  */}
         </div>
      </Fragment>

   );
}

export default App;
