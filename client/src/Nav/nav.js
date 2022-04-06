import React from "react";
import { Link } from "react-router-dom";

function Nav({ user }) {

    console.log(user)


    const logInOrAccount = (user ? <Link className="Link" to="/account">Your Account</Link> : <Link className="Link" to="/login">Log In</Link>)

    return (
        <React.Fragment>
            <div>
                <Link to="/">Home</Link>
                <Link to="/createaccount">Create Account</Link>
                {logInOrAccount}
            </div>
        </React.Fragment>
    )
}

export default Nav;