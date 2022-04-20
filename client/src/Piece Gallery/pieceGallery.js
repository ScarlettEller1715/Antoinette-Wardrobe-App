import React, { useState } from "react";
import { Link } from "react-router-dom";
import PieceCard from "../Piece Card/pieceCard";

import "../Piece Gallery/pieceGallery.css"

function PieceGallery({ clothes, laundryUpdate, page }) {

    const [formalityFilter, setFormalityFilter] = useState("")
    const [weatherFilter, setWeatherFilter] = useState("")
    const [piece_typeFilter, setPiece_TypeFilter] = useState("")
    const [colorFilter, setColorFilter] = useState("")
    const [laundryFilter, setLaundryFilter] = useState("")


    const filteredClothes = clothes.filter(piece => 
        piece.formality === formalityFilter || piece.formality === "Any" || formalityFilter === ""
        ).filter(piece => 
            piece.weather === weatherFilter || piece.weather === "Any" || weatherFilter === ""
        ).filter(piece => 
            piece.piece_type === piece_typeFilter || piece_typeFilter === ""
        ).filter(piece => 
            piece.color === colorFilter || colorFilter === ""
        ).filter(piece => 
            piece.clean === true || laundryFilter === ""
        ).sort(function(piece1, piece2) {
            const date1 = new Date(piece1.created_at)
            const date2 = new Date(piece2.created_at)
            return date2 - date1
        })
    
    const renderedWardrobe = filteredClothes.map((piece) => {
        return <PieceCard piece={piece} laundryUpdate={laundryUpdate}/>
    })

    return (
        <React.Fragment>
            <div className="fullClothesDisplay">
                <div className="filters">
                    {page ? <p>I need an outfit...</p> : <p>Sort your laundry:</p>}
                    <select className="selectbox" onChange={(e) => setFormalityFilter(e.target.value)}>
                        <option value="">For Any Occasion</option>
                        <option value="Formal">Formal Pieces</option>
                        <option value="Business">Business Pieces</option>
                        <option value="Casual">Casual Pieces</option>
                    </select>
                    <select onChange={(e) => setWeatherFilter(e.target.value)}>
                        <option value="">For Any Weather</option>
                        <option value="Cold">For a Cold Day</option>
                        <option value="Cool">For a Cool Day</option>
                        <option value="Warm">For a Warm Day</option>
                        <option value="Hot">For a Hot Day</option>
                    </select>
                    <select onChange={(e) => setPiece_TypeFilter(e.target.value)}>
                        <option value="">Any Clothing</option>
                        <option value="Top">Tops Only</option>
                        <option value="Bottom">Bottoms Only</option>
                        <option value="Outerwear">Outerwear Only</option>
                        <option value="Footwear">Footwear Only</option>
                    </select>
                    <select onChange={(e) => setColorFilter(e.target.value)}>
                        <option value="">In Any Color</option>
                        <option value="White">White</option>
                        <option value="Beige">Beige</option>
                        <option value="Grey">Grey</option>
                        <option value="Light Blue">Light Blue</option>
                        <option value="Pink">Pink</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Orange">Orange</option>
                        <option value="Black">Black</option>
                        <option value="Brown">Brown</option>
                        <option value="Navy">Navy</option>
                        <option value="Green">Green</option>
                        <option value="Purple">Purple</option>
                        <option value="Red">Red</option>
                    </select>
                    {page ? <select onChange={(e) => setLaundryFilter(e.target.value)}>
                        <option value="">See Full Wardrobe</option>
                        <option value="true">See Clean Clothes Only</option>
                    </select> : null}
                    {page ? <Link to="/createpiece" className="createButton">Add New Item</Link> : null}
                </div>
                <div className="gallery">
                    {renderedWardrobe}
                </div>
            </div>
        </React.Fragment>
    )
}

export default PieceGallery;