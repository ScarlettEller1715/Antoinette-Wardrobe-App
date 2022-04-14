import React from "react";
import PageHeader from '../pageHeader/pageHeader';
import { useHistory } from "react-router-dom";


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
            <h1>The account details of {user.name}</h1>
            <p>Username: {user.username}</p>
            <p>Email on file: {user.email}</p>

            <button onClick={handleLogoutClick}>Logout</button>
        </React.Fragment>
    )
}

export default Account;