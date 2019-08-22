import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./container/home";
import Create from "./container/create";
import Edit from "./container/edit";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/:id" component={Edit} /> */}
        <Route path="/create" component={Create} />
      </Switch>
    </div>
  );
}

export default App;
