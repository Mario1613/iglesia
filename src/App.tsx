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


import Books from "./views/Books";


const App = ()=> {
 
  return (
    <>
      <Router >
        <Nav />
        <Switch>
          <Route path='/' component={Inicio} exact>
            <Inicio />
            <Nosotros />
            <ProgramaAmanecer />
            <Contacto />
            <ScrollerIMG />
            <Footer />
          </Route>
          <Route path="/capellania" component={Capellania}>
            <Capellania />
          </Route>
          <Route path="/books" component={Books}>
            <Books />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  )
  
}

export default App;
 