import React from "react";
import { Link } from "react-router-dom";

function Nav({ user }) {

    console.log(user.name)

    const createAccountOrUsername = (user ? <p>Welcome {user.name}!</p> : <Link to="/createaccount">Create Account</Link>)
    const logInOrAccount = (user ? <Link className="Link" to="/account">Your Account</Link> : <Link className="Link" to="/login">Log In</Link>)

    return (
        <React.Fragment>
            <div>
                <Link to="/">Home</Link>
                {logInOrAccount}
                {createAccountOrUsername}
            </div>
        </React.Fragment>
    )
}

export default Nav;