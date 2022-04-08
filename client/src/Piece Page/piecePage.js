import React from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../pageHeader/pageHeader";

function PiecePage({ user }) {
    
    const location = useLocation();
    const pieceId = location.state

    

    return(
        <React.Fragment>
            <PageHeader user={user} />
            <h1>Piece Page</h1>
        </React.Fragment>
    )
}

export default PiecePage;