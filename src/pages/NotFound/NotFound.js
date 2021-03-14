import React from 'react'
import CustomLink from '../../components/CustomLink'
import Page from '../../components/Page'

const NotFound = () => {
    const content = (
        <div>
            Page not found - <CustomLink href={'/'} text={'Go to Home'} />
        </div>
    )

    return <Page content={content} />
}

export default NotFound
