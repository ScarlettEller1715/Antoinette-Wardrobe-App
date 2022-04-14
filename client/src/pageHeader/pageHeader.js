import React from "react";
import Nav from "../Nav/nav";
import "../pageHeader/pageHeader.css"
import icon from "../img/queen-uk.png"

function PageHeader({ user }) {

   return (
   <React.Fragment>
        <div className="headerDiv">
            <h1 className="titleText">Antoinette</h1>
            <img className="logo" src={icon} />
        </div>
        <Nav user={user}/>
    </React.Fragment>
    
   )
}

export default PageHeader;