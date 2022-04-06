import React from 'react'
import PageHeader from '../pageHeader/pageHeader';

function Home ({ count }) {
    return (
        <React.Fragment>
            <PageHeader />
            <h1>Page Count: {count}</h1>
        </React.Fragment>
        
    )
}

export default Home;