import React from "react";
import PageHeader from '../pageHeader/pageHeader';

function Account({ setUser }) {
    
    function handleLogoutClick() {
        fetch("/logout", {
            method: "DELETE"
        }).then((res) => {
            if (res.ok) {
                setUser(null)
            }
        })
    }
    
    return (
        <React.Fragment>
            <PageHeader />
            <h1>React Account screen</h1>
            <button onClick={handleLogoutClick}>Logout</button>
        </React.Fragment>
    )
}

export default Account;