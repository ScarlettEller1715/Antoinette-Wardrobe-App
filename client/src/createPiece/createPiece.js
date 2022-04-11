import React from "react";
import PageHeader from "../pageHeader/pageHeader";

function CreatePiece({ user }) {
    return (
        <React.Fragment>
            <PageHeader user={user} />
            <h1>Create Piece Page</h1>
        </React.Fragment>
    )
}

export default CreatePiece;