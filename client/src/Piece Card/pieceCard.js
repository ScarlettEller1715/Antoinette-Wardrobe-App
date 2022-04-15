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
                <img className="pieceImage" src={piece.clothing_image.url}/>
                {/* <h3>{piece.name}</h3> */}
                <Link className="detailLink"
                        to={{
                            pathname: "/piecepage", 
                            state: { id: piece.id }
                        }}
                    >{piece.name}</Link>
                <div className="cardButtons">
                    <button onClick={handleLaundry}>Laundry</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PieceCard;