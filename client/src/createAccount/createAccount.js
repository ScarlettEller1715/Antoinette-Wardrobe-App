import React, { useState } from "react";

import "../createAccount/createAccount.css"
import createAccountImage from "../img/CreateAccount.jpg"

function CreateAccount({ setUser }) {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")

    function handleSignUp(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                username,
                password,
                password_confirmation: passwordConfirmation,
                email,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {setUser(user)})
            } else {
                r.json().then((e) => alert(e.errors))
            }
        })}
    
    return (
        <React.Fragment>
            <div className="createPageExteriorDiv">
                <div className="fullCreatePage">
                    <img src={createAccountImage} className="createPageImage"/>
                    <div className="createPageTextBox">
                        <h1 className="createPageTitle">- Join the Jubilee! -</h1>
                        <form onSubmit={handleSignUp} className="createForm">
                            <input  placeholder="Your name"
                                    type="text"
                                    id="name"
                                    autoComplete="off"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                            />
                            <input placeholder="Your desired username"
                                type="text"
                                id="username"
                                autoComplete="off"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input placeholder="Your password"
                                type="password"
                                id="password"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input placeholder="Password confirmation"
                                type="password"
                                id="password_confirmation"
                                autoComplete="off"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                            />
                            <input placeholder="Your Email" 
                                type="text"
                                id="username"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="createAccButtonDiv">
                                <button type="submit" className="createAccButton">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateAccount;