import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="about" component={About} />
          <Route exact path="portfolio" component={Portfolio} />
          {/* <Route exact path="projects" component={Projects} /> */}
          <Route exact path="contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;