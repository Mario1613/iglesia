import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./views/Nav";
import Inicio from "./views/Home/index";
import Capellania from "./views/Capellania/index";
import Footer from "./views/Footer";

import Books from "./views/Books";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/capellania" element={<Capellania />}></Route>
          <Route path="/books" element={<Books />}>          </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
