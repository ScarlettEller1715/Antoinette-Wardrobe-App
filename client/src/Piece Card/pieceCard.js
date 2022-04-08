import React from "react";
import { Link } from "react-router-dom";

function PieceCard({ piece }) {

    return (
        <React.Fragment>
            <h3>{piece.name}</h3>
            <p>Wear on {piece.weather.toLowerCase()} days</p>
            <Link to="/piecepage">See details</Link>
        </React.Fragment>
    )
}

export default PieceCard;