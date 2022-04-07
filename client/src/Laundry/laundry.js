import React from "react";
import PageHeader from "../pageHeader/pageHeader";
import PieceGallery from "../Piece Gallery/pieceGallery";

function Laundry({ user }) {
    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <h1>Laundry Page</h1>
            <PieceGallery />
        </React.Fragment>
    )
}

export default Laundry;