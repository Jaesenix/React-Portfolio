import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Switch from 'react-bootstrap/esm/Switch';


function App() {
  return (
    <Router>
      <Navbar />
        <Wrapper>
          <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
        </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;