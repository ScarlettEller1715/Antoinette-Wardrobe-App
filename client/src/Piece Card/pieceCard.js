import React from "react";
import { Link } from "react-router-dom";

function PieceCard({ piece }) {

    return (
        <React.Fragment>
            <h3>{piece.name}</h3>
            <p>{piece.type}</p>
            <Link to="/piecepage">See details</Link>
        </React.Fragment>
    )
}

export default PieceCard;