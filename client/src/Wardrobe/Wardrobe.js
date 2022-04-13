import React from "react"; 
import PageHeader from "../pageHeader/pageHeader";
import PieceGallery from "../Piece Gallery/pieceGallery";



function Wardrobe({ user, clothes, laundryUpdate }) {
        
    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <h1>Wardrobe Screen</h1>
            <PieceGallery clothes={clothes} laundryUpdate={laundryUpdate} page={true}/>
        </React.Fragment>
    )
}

export default Wardrobe;