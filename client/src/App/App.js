import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../home/home';
import Login from '../Login/login';
import CreateAccount from "../createAccount/createAccount";
import Account from "../account/account";
import Wardrobe from "../Wardrobe/Wardrobe";
import Laundry from "../Laundry/laundry";
import PiecePage from "../Piece Page/piecePage";
import LogoutWardrobe from "../LogoutWardrobe/logoutWardrobe";
import LogoutLaundry from "../LogoutLaundry/logoutLaundry";


function App() {
  const [user, setUser] = useState(null)
  const [wardrobe, setWardrobe] = useState([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setWardrobe(user.pieces)
        })
      }
    })
  }, []);

  const laundryOnly = wardrobe.filter((piece) => {
    if (piece.clean === false) {
      return piece
    }
  })


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

          <Route path="/wardrobe">
           {user ? <Wardrobe user={user} clothes={wardrobe}/> : <LogoutWardrobe user = {user}/>}
          </Route>

          <Route path="/laundry">
          {user ? <Laundry user={user} clothes={laundryOnly}/> : <LogoutLaundry user = {user}/>}
          </Route>

          <Route path="/piecepage">
           <PiecePage user={user}/>
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
