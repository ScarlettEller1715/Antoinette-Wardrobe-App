import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import PageHeader from "../pageHeader/pageHeader";

function CreatePiece({ user, addNewPiece }) {

    const history = useHistory();
    
    const [name, setName] = useState("")
    const [clothing_Image, setClothing_Image] = useState("")
    const [piece_type, setPiece_Type] = useState("")
    const [weather, setWeather] = useState("")
    const [formality, setFormality] = useState("")
    const [color, setColor] = useState("")
    const imageUpload = useRef()
    
    function handleSubmit(e) {
        e.preventDefault();

         const formData = new FormData()
         formData.append('name', name)
         formData.append('clothing_image', clothing_Image)
         formData.append('piece_type', piece_type)
         formData.append('weather', weather)
         formData.append('formality', formality)
         formData.append('color', color)
         formData.append('clean', true)

         fetch("/createpiece", {
             method: "POST",
             body: formData,
         }).then((r) => { 
             if (r.ok) {
                 r.json().then((response) => {
                     addNewPiece(response)
                     history.push("/wardrobe")
                })
             } else {
                 r.json().then((e) => alert(e.errors))
             }
         })
    }
    
    return (
        <React.Fragment>
            <PageHeader user={user} />
            <h1>Add a new piece to your wardrobe!</h1>
            <form onSubmit={handleSubmit}>
                <h3>What do you call this piece?</h3>
                <input placeholder="Name"
                type="text"
                autoComplete="off"
                value={name}
                id="name"
                onChange={(e) => setName(e.target.value)}
                />
                <h3>What does this piece look like?</h3>
                <input type="file"
                ref={imageUpload}
                onChange={(e) => setClothing_Image(e.target.files[0])}
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
                <button type="submit">Add to Wardrobe!</button>
            </form>
        </React.Fragment>
    )
}

export default CreatePiece;