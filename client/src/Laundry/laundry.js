import React from "react";
import PageHeader from "../pageHeader/pageHeader";
import PieceGallery from "../Piece Gallery/pieceGallery";

function Laundry({ user, clothes }) {


    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <h1>Laundry Page</h1>
            {<PieceGallery clothes={clothes}/>}
        </React.Fragment>
    )
}

export default Laundry;