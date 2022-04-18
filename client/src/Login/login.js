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
                        <form onSubmit={handleSubmit}>
                            <input type="text"
                            placeholder="Username"
                            id="username"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            <input type="password"
                            placeholder="Password"
                            id="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit">Login</button>
                        </form>
                        <p>Never utilized our services? <Link to="/createaccount">Create an account.</Link></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;