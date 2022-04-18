import React from 'react'
import { Link } from "react-router-dom";
import PageHeader from '../pageHeader/pageHeader';

import "../home/home.css"
import homepageImage from "../img/homepage1.jpg"

function Home ({ user }) {
    
    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <h1>Reign over your wardrobe.</h1>
            <h2>Bienvenue à Antoinette</h2>
            <p>a wardrobe organizer at your service. 
                We give you a bird’s eye view of your closet, 
                displaying all your clothes in one convenient place. 
                Discover outfits you’ve never considered, find the hidden 
                gems you never wear enough, donate the pieces you never wear.</p>
            <h2>We can't wait to see what you'll wear next.</h2>
            <Link to={user ? "/wardrobe" : "/createaccount"}>Let's begin...</Link>
            <img src={homepageImage} />
        </React.Fragment>
        
    )
}

export default Home;