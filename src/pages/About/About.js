import React from 'react'
import Page from '../../components/Page'
import Title from '../../components/Title'
import Bold from '../../components/Bold'
import CustomExternalLink from '../../components/CustomExternalLink'

const About = () => {
    const content = (
        <div>
            <Title text={'# About'}></Title>
            <p>
                <Bold text={'Github: '} />
                <CustomExternalLink text={'mramundo'} href={'https://github.com/mramundo'} />
            </p>
            <p>
                <Bold text={'Discord: '} />
                <CustomExternalLink text={'ohboi'} href={'https://discordapp.com/users/432581047243374603'} />
            </p>
            <p>
                <Bold text={'Telegram: '} />
                <CustomExternalLink text={'mircoramundo'} href={'https://t.me/mircoramundo'} />
            </p>
            <p>
                <Bold text={'Twitter: '} />
                <CustomExternalLink text={'mirco_ramundo'} href={'https://twitter.com/mirco_ramundo'} />
            </p>
        </div>
    )

    return <Page content={content} />
}

export default About
