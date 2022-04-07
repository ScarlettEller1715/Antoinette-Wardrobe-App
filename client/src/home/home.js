import React from 'react'
import PageHeader from '../pageHeader/pageHeader';

function Home ({ user }) {
    return (
        <React.Fragment>
            <PageHeader user={user}/>
        </React.Fragment>
        
    )
}

export default Home;