import React from "react";
import { Link } from "react-router-dom";
import PieceCard from "../Piece Card/pieceCard";

function PieceGallery({ clothes }) {
    
    const renderedWardrobe = clothes.map((piece) => {
        return <PieceCard piece={piece}/>
    })

    return (
        <React.Fragment>
            <h2>Clothing Filters to go here</h2>
            <Link to="/createpiece">Add a new piece!</Link>
            {renderedWardrobe}
        </React.Fragment>
    )
}

export default PieceGallery;