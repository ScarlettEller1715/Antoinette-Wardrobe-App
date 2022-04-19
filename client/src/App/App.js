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
import CreatePiece from "../createPiece/createPiece";


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

  function addNewPiece(newPiece) {
    setWardrobe([
      ...wardrobe,
      newPiece
    ])
  }

  function donatePiece(id) {
    const updatedData = wardrobe.filter((piece) => {
      if (piece.id === id) {
        return null
      } else {
        return piece
      }
    })
    setWardrobe(updatedData)
  }

  function laundryUpdate(updatedPiece) {
    const updatedPieces = wardrobe.map((piece) => {
      if (piece.id === updatedPiece.id) {
        return updatedPiece
      } else {
        return piece
      }
    });
    setWardrobe(updatedPieces)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route path="/login">
           {user ? <Account setWardrobe={setWardrobe} setUser={setUser} user={user}/> : <Login setUser={setUser} setWardrobe={setWardrobe}/>} 
          </Route>

          <Route path="/createaccount">
            {user ? <Account setWardrobe={setWardrobe} setUser={setUser} user={user}/> : <CreateAccount setUser={setUser}/>}
            
          </Route>

          <Route path="/account">
          {user ? <Account setWardrobe={setWardrobe} setUser={setUser} user={user}/> : <Login setUser={setUser}/>}
          </Route>

          <Route path="/wardrobe">
           {user ? <Wardrobe user={user} clothes={wardrobe} laundryUpdate={laundryUpdate}/> : <LogoutWardrobe user = {user}/>}
          </Route>

          <Route path="/laundry">
          <Laundry user={user} clothes={laundryOnly} laundryUpdate={laundryUpdate}/>
          </Route>

          <Route path="/piecepage">
           <PiecePage user={user} donatePiece={donatePiece}/>
          </Route>

          <Route path="/createpiece">
           <CreatePiece user={user} addNewPiece={addNewPiece}/>
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
