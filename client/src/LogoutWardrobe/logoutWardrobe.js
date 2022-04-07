import React from "react";
import PageHeader from "../pageHeader/pageHeader";

function LogoutWardrobe({ user }) {
    return (
        <React.Fragment>
            <PageHeader user={user} />
            <h1>This the Wardrobe Page if you're logged out</h1>
        </React.Fragment>
    )
}

export default LogoutWardrobe;