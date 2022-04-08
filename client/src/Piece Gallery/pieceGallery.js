import React from "react";
import PieceCard from "../Piece Card/pieceCard";

function PieceGallery({ clothes }) {
    
    const renderedWardrobe = clothes.map((piece) => {
        return <PieceCard piece={piece}/>
    })

    return (
        <React.Fragment>
            <h2>Clothing Filters to go here</h2>
            {renderedWardrobe}
        </React.Fragment>
    )
}

export default PieceGallery;