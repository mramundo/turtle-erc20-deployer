import React from 'react'
import Page from '../../components/Page'
import Title from '../../components/Title'

const Home = () => {
    const content = (
        <div>
            <Title text={'# Home'}></Title>
        </div>
    )

    return <Page content={content} />
}

export default Home
