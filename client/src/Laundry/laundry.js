import React from "react";
import PageHeader from "../pageHeader/pageHeader";

function Laundry({ user }) {
    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <h1>Laundry Page</h1>
        </React.Fragment>
    )
}

export default Laundry;