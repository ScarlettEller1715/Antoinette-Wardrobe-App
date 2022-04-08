import React from "react";
import { Link } from "react-router-dom";

import './pieceCard.css'

function PieceCard({ piece }) {
    const images = require.context('../../img', true)

    return (
        <React.Fragment>
            <div className="pieceCard">
                <h3>{piece.name}</h3>
                <img className="pieceImage" src={images('./' + piece.image_filename)}/>
                <p>Wear on {piece.weather.toLowerCase()} days</p>
                <Link to="/piecepage">See details</Link>
            </div>
        </React.Fragment>
    )
}

export default PieceCard;