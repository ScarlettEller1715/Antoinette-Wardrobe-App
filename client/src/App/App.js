import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../home/home';
import Login from '../Login/login';
import CreateAccount from "../createAccount/createAccount";
import Account from "../account/account";


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        })
      }
    })
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route path="/login">
           {user ? <Account setUser={setUser} user={user}/> : <Login setUser={setUser}/>} 
          </Route>

          <Route path="/createaccount">
            {user ? <Account setUser={setUser} user={user}/> : <CreateAccount setUser={setUser}/>}
            
          </Route>

          <Route path="/account">
          {user ? <Account setUser={setUser} user={user}/> : <Login setUser={setUser}/>}
          </Route>

          <Route path="/">
            <Home user={user}/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
