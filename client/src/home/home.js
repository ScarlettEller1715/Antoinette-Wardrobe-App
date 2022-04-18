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
                        <h2 className='textboxTitle'>Bienvenue à Antoinette,</h2>
                        <p>wardrobe organizer at your service. 
                            We offer a bird’s eye view of your closet, 
                            displaying all it's contents in one convenient place. 
                            Discover outfits you’ve never considered, find the hidden 
                            gems you never wear enough, donate the pieces you never wear.</p>
                        <h2 className='finalGreeting'>We can't wait to see what you'll wear next.</h2>
                        <div className='beginButton'>
                            <Link to={user ? "/wardrobe" : "/createaccount"} className="homepageLink">Let's begin...</Link>
                        </div>
                </div>
                </div>
                <img src={homepageImage} />
            </div>
        </React.Fragment>
        
    )
}

export default Home;