import React from "react";
import Nav from "../Nav/nav";

function PageHeader({ user }) {
   return ( <React.Fragment>
        <h1>Antoinette</h1>
        <Nav user={user}/>
    </React.Fragment>
   )
}

export default PageHeader;