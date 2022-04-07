import React from "react"; 
import PageHeader from "../pageHeader/pageHeader";
import PieceGallery from "../Piece Gallery/pieceGallery";



function Wardrobe({ user }) {
    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <h1>Wardrobe Screen</h1>
            <PieceGallery />
        </React.Fragment>
    )
}

export default Wardrobe;