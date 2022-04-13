import React from "react";
import PageHeader from "../pageHeader/pageHeader";
import PieceGallery from "../Piece Gallery/pieceGallery";

function Laundry({ user, clothes, laundryUpdate }) {


    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <h1>Laundry Page</h1>
            {<PieceGallery clothes={clothes} laundryUpdate={laundryUpdate}/>}
        </React.Fragment>
    )
}

export default Laundry;