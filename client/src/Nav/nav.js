import React from "react";
import { Link } from "react-router-dom";

import "../Nav/nav.css"

function Nav({ user }) {

    const createAccountOrUsername = (user ? <p>Welcome {user.name}!</p> : <Link to="/createaccount" className="navLink">Create Account</Link>)


    const logInOrAccount = (user ? <Link to="/account" className="navLink">Your Account</Link> : <Link to="/login" className="navLink">Log In</Link>)

    return (
        <React.Fragment>
            <div className="navbar">
                <Link to="/" className="navLink">Home</Link>
                <Link to="/wardrobe" className="navLink">Your Wardrobe</Link>
                <Link to="/laundry" className="navLink">Dirty Laundry</Link>
                {logInOrAccount}
                {createAccountOrUsername}
            </div>
        </React.Fragment>
    )
}

export default Nav;