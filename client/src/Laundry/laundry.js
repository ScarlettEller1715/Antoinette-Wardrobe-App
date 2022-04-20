import React from "react";
import PageHeader from "../pageHeader/pageHeader";
import PieceGallery from "../Piece Gallery/pieceGallery";

function Laundry({ user, clothes, laundryUpdate }) {

    return (
        <React.Fragment>
            <PageHeader user={user}/>
            {<PieceGallery clothes={clothes} laundryUpdate={laundryUpdate} page={false}/>}
        </React.Fragment>
    )
}

export default Laundry;