import React from 'react'
import PageHeader from '../pageHeader/pageHeader';

function Home ({ user }) {
    
    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <h1>Homepage</h1>
        </React.Fragment>
        
    )
}

export default Home;