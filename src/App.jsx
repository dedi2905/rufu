import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/pages/about/About";
import { Gallery } from "./components/pages/gallery/Gallery";
import { Contact } from "./components/pages/contact/Contact";
import { Home } from "./components/pages/home/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/gallery">
            <Gallery />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
