import React from 'react'
import { Link } from "react-router-dom";
import PageHeader from '../pageHeader/pageHeader';

import "../home/home.css"
import homepageImage from "../img/homepage1.jpg"

function Home ({ user }) {
    
    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <div className="fullHomepage">
                <div className='homepageText'>
                    <h1>Reign over your wardrobe.</h1>
                    <div className="homepageTextBox">
                        <h2>Bienvenue à Antoinette,</h2>
                        <p>wardrobe organizer at your service. 
                            We offer a bird’s eye view of your closet, 
                            displaying all it's contents in one convenient place. 
                            Discover outfits you’ve never considered, find the hidden 
                            gems you never wear enough, donate the pieces you never wear.</p>
                        <h2>We can't wait to see what you'll wear next.</h2>
                        <Link to={user ? "/wardrobe" : "/createaccount"}>Let's begin...</Link>
                </div>
                </div>
                <img src={homepageImage} />
            </div>
        </React.Fragment>
        
    )
}

export default Home;