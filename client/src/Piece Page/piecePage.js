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
    const [pageWeather, setPageWeather] = useState("")
    const [pageFormality, setPageFormality] = useState("")

    useEffect(() => {
        fetch(`/piecedetails/${pieceId.id}`).then((r) => {
            if (r.ok) {
                r.json().then((r) => {
                    setTargetPiece(r)
                    setPageImage(<img className="piecePageImage" src={r.clothing_image.url}/>)
                    setPageWeather(r.weather.toLowerCase())
                    setPageFormality(r.formality.toLowerCase())
                });
            } else {
                r.json().then((error) => alert(error.errors))
            }
        });
    }, []);

    function determineWeather() {
        if (pageWeather === "any") {
            return <p>Can be worn in any weather.</p>
        } else {
            return <p>Should be worn in {pageWeather} weather.</p>
        }
    }

    function determineFormality() {
        if (pageFormality === "any") {
            return <p>Can be worn to any occasion.</p>
        } else {
            return <p>Should be worn to {pageFormality} affairs.</p>
        }
    }

    function handleDelete() {
        fetch(`/donate/${targetPiece.id}`, {
            method: "DELETE",
        }).then(() => {
            donatePiece(targetPiece.id)
            history.push('/wardrobe')
        })
    }

    const cleanStatus = targetPiece.clean

    return (
        <React.Fragment>
            <PageHeader user={user} />
            <div className="fullPiecePage">
                <div className="pageContent">
                    {pageImage}
                    <div className="pieceDetails">
                        <h1 className="pieceTitle">{targetPiece.name}</h1>
                            <div className="pieceText">
                                {determineWeather()}
                                {determineFormality()}
                                <p>{targetPiece.color} is the dominant shade of this piece.</p>
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