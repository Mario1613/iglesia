import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import ProgramaAmanecer from "./views/ProgramaAmanecer";

import Nav from "./views/Nav";
import Inicio from "./views/Home/index";
import Contacto from './views/Contacto';
import Capellania from "./views/Capellania/index";
import Nosotros from "./views/Nosotros";
import ScrollerIMG from "./views/ScrollerIMG";
import Footer from "./views/Footer";




const App = ()=> {
 
  return (
    <>

       <Router >
         <Route path='/'>
            <Nav/>
         </Route>
          <Route path="/inicio">
            <Inicio/>
            <Nosotros/>
            <ProgramaAmanecer />
            <Contacto/>
            <ScrollerIMG/>
            <Footer/>
          </Route>
          <Route path="/capellania">
            <Capellania/>
            
          </Route>         
       </Router>
         </>
  )
  
}

export default App;
 