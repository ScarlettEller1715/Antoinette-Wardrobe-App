import React from "react";
import PageHeader from "../pageHeader/pageHeader";

function PiecePage({ user }) {
    return(
        <React.Fragment>
            <PageHeader user={user} />
            <h1>Piece Page</h1>
        </React.Fragment>
    )
}

export default PiecePage;