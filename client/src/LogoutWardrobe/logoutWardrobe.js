import React from "react";
import PageHeader from "../pageHeader/pageHeader";

import "../LogoutWardrobe/logoutWardrobe.css"
import logoutWImage from "../img/logoutWardrobe.PNG"

function LogoutWardrobe({ user }) {
    
    return (
        <React.Fragment>
            <PageHeader user={user} />
            <div className="fullLogoutWardrobe">
                <img src={logoutWImage} className="logoutWardrobeImage" />
                <div className="logoutWardrobeTextbox">
                    <h1 className="logoutWardrobeTitle">- An Introduction to our Services -</h1>
                    <p className="logoutWardrobeText">Antoinette allows you to upload a personalized profile for every piece of clothing in your closet. This includes a name, image, 
                        details of it's appearance, what occasions to which it can be worn and in what kind of weather. These pieces will appear in cards
                        like the one featured, which can be filtered by a variety of traits. Clicking on the piece's name will display further details, while 
                        clicking the laundry basket will place it into your digital laundry. This feature allows you to keep track of what is ready to wear,
                        so you'll always know what is at your disposal. With our services at your disposal, you'll have the perfect guide for what to wear
                        for any circumstance.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LogoutWardrobe;