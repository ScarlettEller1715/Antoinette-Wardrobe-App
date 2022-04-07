import React from "react"; 
import PageHeader from "../pageHeader/pageHeader";


function Wardrobe({ user }) {
    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <h1>Wardrobe Screen</h1>
        </React.Fragment>
    )
}

export default Wardrobe;