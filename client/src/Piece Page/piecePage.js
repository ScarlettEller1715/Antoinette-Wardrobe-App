import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../pageHeader/pageHeader";

function PiecePage({ user }) {

    const images = require.context('../../img', true)
    
    const location = useLocation();
    const pieceId = location.state

    const [targetPiece, setTargetPiece] = useState([])
    const [pageImage, setPageImage] = useState(<img className="pieceImage" src={images('./Loading.jpg')}/>)

    useEffect(() => {
        fetch(`/piecedetails/${pieceId.id}`).then((r) => {
            if (r.ok) {
                r.json().then((r) => {
                    setTargetPiece(r)
                    setPageImage(<img className="pieceImage" src={images('./' + r.image_filename)}/>)
                });
            } else {
                r.json().then((error) => alert(error.errors))
            }
        });
    }, []);
    
    
    const cleanStatus = targetPiece.clean

    return (
        <React.Fragment>
            <PageHeader user={user} />
            <h1>{targetPiece.name}</h1>
            <ul>
                <li>Clothing Type: {targetPiece.piece_type}</li>
                <li>Should be worn on {targetPiece.weather} days.</li>
                <li>Can be worn to {targetPiece.formality} occasions.</li>
                <li>{targetPiece.color} is this piece's dominant shade.</li>
                <li>{cleanStatus ? "Ready to wear!" : "In your laundry bin."}</li>
            </ul>
            {pageImage}
        </React.Fragment>
    )
}

export default PiecePage;