import React, { useState } from "react";
import { Link } from "react-router-dom";

import './pieceCard.css'
import laundryIcon from '../img/external-laundry-basket-laundry-konkapp-detailed-outline-konkapp.png'

function PieceCard({ piece, laundryUpdate }) {

    const [updatedClean, setUpdatedClean] = useState(!piece.clean);

    const cleanStatus = piece.clean

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
                    setUpdatedClean(!piece.clean)
                })
            } else {
                r.json().then((e) => alert(e.errors))
            }})
    }

    return (
        <React.Fragment>
            <div className="pieceCard">
                <img className="pieceImage" src={piece.clothing_image.url}/>
                <Link className="detailLink"
                        to={{
                            pathname: "/piecepage", 
                            state: { id: piece.id }
                        }}
                    >{piece.name}</Link>
                <div className="cardButtons">
                    <p>{cleanStatus ? "Ready to wear!" : "In Laundry"}</p>
                    <img src={laundryIcon} onClick={handleLaundry} className="laundryIcon"/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PieceCard;