import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
