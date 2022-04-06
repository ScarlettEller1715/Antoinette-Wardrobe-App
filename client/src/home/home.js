import React from 'react'
import PageHeader from '../pageHeader/pageHeader';

function Home ({ count, user }) {
    return (
        <React.Fragment>
            <PageHeader user={user}/>
            <h1>Page Count: {count}</h1>
        </React.Fragment>
        
    )
}

export default Home;