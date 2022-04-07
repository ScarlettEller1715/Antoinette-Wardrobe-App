import React from "react";
import { Link } from "react-router-dom";

function PieceCard() {

    function handlePieceClick() {
        alert("Hi Scarlett!")
    }

    return (
        <React.Fragment>
            <Link to="/piecepage">Piece Cards Here</Link>
        </React.Fragment>
    )
}

export default PieceCard;