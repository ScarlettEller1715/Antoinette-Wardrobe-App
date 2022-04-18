import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "../Login/login.css"
import loginImage from "../img/Login.PNG"

function Login({ setUser, setWardrobe }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    setWardrobe(user.pieces)
                    history.push("/wardrobe");
                });
            } else {
                r.json().then((error) => alert(error.errors));
            }
        });
    }

    return (
        <React.Fragment>
            <div className="loginPage">
                <div className="fullLogin">
                    <img src={loginImage} className="loginImage" />
                    <div className="loginForm">
                        <h1>Welcome back darling...</h1>
                        <h2>User Login</h2>
                        <div className="loginInputField">
                            <form onSubmit={handleSubmit}>
                                <input type="text"
                                placeholder="Username"
                                id="username"
                                autoComplete="off"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="loginField"
                                />
                                <input type="password"
                                placeholder="Password"
                                id="password"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                className="loginField"
                                />
                                <div className="loginButton">
                                    <button type="submit">Login</button>
                                </div>
                            </form>
                            <p className="loginFooter">Never utilized our services? <Link to="/createaccount" className="loginCreateLink">Create an account.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;