import React from "react"; 
import PageHeader from "../pageHeader/pageHeader";
import PieceGallery from "../Piece Gallery/pieceGallery";

import "../Wardrobe/Wardrobe.css"



function Wardrobe({ user, clothes, laundryUpdate }) {
        
    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <PieceGallery clothes={clothes} laundryUpdate={laundryUpdate} page={true}/>
        </React.Fragment>
    )
}

export default Wardrobe;