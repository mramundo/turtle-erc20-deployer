import React from 'react'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import Page from '../../components/Page'

const NotFound = () => {
    const content = (
        <div>
            <Title text={'# 404'}></Title>
            <Paragraph text={'Page not found'} />
        </div>
    )

    return <Page content={content} />
}

export default NotFound
