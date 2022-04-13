import React from "react";
import PageHeader from "../pageHeader/pageHeader";

function LogoutLaundry({ user }) {
    
    return (
        <React.Fragment>
            <PageHeader user={user} />
            <h1>This the Laundry Page if you're logged out</h1>
        </React.Fragment>
    )
}

export default LogoutLaundry;