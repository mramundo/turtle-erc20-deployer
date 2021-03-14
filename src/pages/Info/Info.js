import React from 'react'
import Page from '../../components/Page'
import Title from '../../components/Title'

const Info = () => {
    const content = (
        <div>
            <Title text={'# Info'}></Title>
        </div>
    )

    return <Page content={content} />
}

export default Info
