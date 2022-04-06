import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../home/home';
import Login from '../Login/login';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/createaccount">
            <h1>Create Account</h1>
          </Route>

          <Route path="/account">
            <h1>Account</h1>
          </Route>

          <Route path="/">
            <Home count={count} />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
