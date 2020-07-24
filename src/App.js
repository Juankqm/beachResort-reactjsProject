import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import NavBar from './components/Navbar/index'
//Pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact component={ErrorPage}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
