import React from 'react'
import Page from '../../components/Page'
import Title from '../../components/Title'
import SubTitle from '../../components/SubTitle'
import Bold from '../../components/Bold'
import CustomExternalLink from '../../components/CustomExternalLink'

const About = () => {
    const content = (
        <div>
            <Title text={'# About'}></Title>
            <SubTitle text={'# Me'}></SubTitle>
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
            <p className="mb-4">
                <Bold text={'Twitter: '} />
                <CustomExternalLink text={'mirco_ramundo'} href={'https://twitter.com/mirco_ramundo'} />
            </p>
            <SubTitle text={'# This Project'}></SubTitle>
            <p>
                <Bold text={'Github: '} />
                <CustomExternalLink
                    text={'turtle-erc20-deployer'}
                    href={'https://github.com/mramundo/turtle-erc20-deployer'}
                />
            </p>
        </div>
    )

    return <Page content={content} />
}

export default About
