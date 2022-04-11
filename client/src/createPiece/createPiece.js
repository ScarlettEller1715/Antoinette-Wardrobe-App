import React, { useState } from "react";
import PageHeader from "../pageHeader/pageHeader";

function CreatePiece({ user }) {
    
    const [name, setName] = useState("")
    const [image_filename, setImage_Filename] = useState("")
    const [piece_type, setPiece_Type] = useState("")
    const [weather, setWeather] = useState("")
    const [formality, setFormality] = useState("")
    const [color, setColor] = useState("")
    
    
    return (
        <React.Fragment>
            <PageHeader user={user} />
            <h1>Add a new piece to your wardrobe!</h1>
            <form>
                <h3>What do you call this piece?</h3>
                <input placeholder="Name"
                type="text"
                autoComplete="off"
                value={name}
                id="name"
                onChange={(e) => setName(e.target.value)}
                />
                <h3>What does this piece look like?</h3>
                <input placeholder="Image URL"
                type="text"
                autoComplete="off"
                value={image_filename}
                id="image_filename"
                onChange={(e) => setImage_Filename(e.target.value)}
                />
                <h3>What type of clothing is this?</h3>
                <select onChange={(e) => setPiece_Type(e.target.value)}>
                    <option value="">Clothing Type</option>
                    <option value="Top">Top</option>
                    <option value="Bottom">Bottom</option>
                    <option value="Outerwear">Outerwear</option>
                    <option value="Footwear">Footwear</option>
                </select>
                <h3>In what weather can it be worn?</h3>
                <select onChange={(e) => setWeather(e.target.value)}>
                    <option value="">Select Weather</option>
                    <option value="Any">Any Weather</option>
                    <option value="Cold">Cold</option>
                    <option value="Cool">Cool</option>
                    <option value="Warm">Warm</option>
                    <option value="Hot">Hot</option>
                </select>
                <h3>And to what occasion?</h3>
                <select onChange={(e) => setFormality(e.target.value)}>
                    <option value="">Select Occasion</option>
                    <option value="Any">Any Occasion</option>
                    <option value="Formal">Formal</option>
                    <option value="Business">Business</option>
                    <option value="Casual">Casual</option>
                </select>
                <h3>What is the dominant color of this piece?</h3>
                <select onChange={(e) => setColor(e.target.value)}>
                    <option value="">Choose Color</option>
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
            </form>
        </React.Fragment>
    )
}

export default CreatePiece;