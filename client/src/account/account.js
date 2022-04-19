import React from "react";
import PageHeader from '../pageHeader/pageHeader';
import { useHistory } from "react-router-dom";

import "../account/account.css"
import accountImage from "../img/AccountPage.jpg"


function Account({ setUser, user, setWardrobe }) {

    const history = useHistory();
    
    function handleLogoutClick() {
        fetch("/logout", {
            method: "DELETE"
        }).then((res) => {
            if (res.ok) {
                setUser(null)
                setWardrobe([])
                history.push("/")
            }
        })
    }
    
    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <div className="fullAccountPage">
                <img src={accountImage} className="accountImage"/>
                <div className="accountTextBox">
                    <h1>- Your account details -</h1>
                    <p>Username: {user.username}</p>
                    <p>Email on file: {user.email}</p>
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Account;