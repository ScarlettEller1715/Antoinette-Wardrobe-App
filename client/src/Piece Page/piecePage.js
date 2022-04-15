import React, { useEffect, useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import PageHeader from "../pageHeader/pageHeader";

import "../Piece Page/piecePage.css"

function PiecePage({ user, donatePiece }) {

    const history = useHistory();
    
    const location = useLocation();
    const pieceId = location.state

    const [targetPiece, setTargetPiece] = useState([])
    const [pageImage, setPageImage] = useState("")

    useEffect(() => {
        fetch(`/piecedetails/${pieceId.id}`).then((r) => {
            if (r.ok) {
                r.json().then((r) => {
                    setTargetPiece(r)
                    setPageImage(<img className="piecePageImage" src={r.clothing_image.url}/>)
                });
            } else {
                r.json().then((error) => alert(error.errors))
            }
        });
    }, []);
    
    const cleanStatus = targetPiece.clean

    function handleDelete() {
        fetch(`/donate/${targetPiece.id}`, {
            method: "DELETE",
        }).then(() => {
            donatePiece(targetPiece.id)
            history.push('/wardrobe')
        })
    }

    return (
        <React.Fragment>
            <PageHeader user={user} />
            <div className="fullPiecePage">
                <div className="pageContent">
                    {pageImage}
                    <div className="pieceDetails">
                        <h1 className="pieceTitle">{targetPiece.name}</h1>
                            <div className="pieceText">
                                <p>Should be worn on {targetPiece.weather} days.</p>
                                <p>Can be worn to {targetPiece.formality} occasions.</p>
                                <p>{targetPiece.color} is this piece's dominant shade.</p>
                                <p>{cleanStatus ? "Ready to wear!" : "In your laundry bin."}</p>
                                <div className="buttonsContainer">
                                    <button onClick={handleDelete} className="deleteButton">Remove from Wardrobe</button>
                                </div>
                                <Link to="/wardrobe" className="returnLink">Return to Wardrobe</Link>
                            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PiecePage;