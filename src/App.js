import { Fragment } from 'react';
import './App.css';
import NavMenu from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
   return (
      <Fragment>
         <div className="App">
            {/* nav  */}
            <NavMenu></NavMenu>
            {/* Home  */}
         </div>
      </Fragment>

   );
}

export default App;
