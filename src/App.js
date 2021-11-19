import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
           <Route exact path="/skills">
         <Skills />
          </Route>
           <Route exact path="/projects">
         <Projects />
          </Route>
           <Route exact path="/about">
        <About />
          </Route>
           <Route exact path="/contact">
         <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
