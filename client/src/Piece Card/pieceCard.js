import React from "react";
import { Link } from "react-router-dom";

import './pieceCard.css'

function PieceCard({ piece }) {
    // const images = require.context('../../img', true)

    console.log(piece.clothing_image.url)

    return (
        <React.Fragment>
            <div className="pieceCard">
                <h3>{piece.name}</h3>
                <img className="pieceImage" src={piece.clothing_image.url}/>
                <p>Wear on {piece.weather.toLowerCase()} days</p>
                <Link to={{
                    pathname: "/piecepage", 
                    state: { id: piece.id }
                }}
                >See details</Link>
            </div>
        </React.Fragment>
    )
}

export default PieceCard;