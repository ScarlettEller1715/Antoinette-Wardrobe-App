import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <React.Fragment>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/createaccount">Create Account</Link>
                <Link to="/account">Account</Link>
            </div>
        </React.Fragment>
    )
}

export default Nav;