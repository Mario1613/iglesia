import {
  BrowserRouter as Router,
  Route,
  Switch
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

       
            <Nav/>
    <Switch>

         <Route path='/' exact>
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
         {/* </Switch> */}
    </Switch>
       </Router>
         </>
  )
  
}

export default App;
 