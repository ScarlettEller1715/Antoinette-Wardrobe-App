import React, { useState } from "react";
import { Link } from "react-router-dom";

import './pieceCard.css'

function PieceCard({ piece, laundryUpdate }) {

    const [updatedClean, setUpdatedClean] = useState(!piece.clean);

    function handleLaundry() {
        fetch(`/laundry/${piece.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                clean: updatedClean
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((piece) => {
                    laundryUpdate(piece)
                })
            } else {
                r.json().then((e) => alert(e.errors))
            }})
    }

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
                <button onClick={handleLaundry}>Laundry</button>
            </div>
        </React.Fragment>
    )
}

export default PieceCard;