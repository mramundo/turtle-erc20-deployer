import React from 'react'
import Page from '../../components/Page'
import Title from '../../components/Title'
import SubTitle from '../../components/SubTitle'
import Paragraph from '../../components/Paragraph'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Home = () => {
    const formContent = (
        <div className="grid">
            <Input label={'Name'} field={'name'} type={'text'} span={12} />
            <Input label={'Symbol'} field={'symbol'} type={'text'} span={12} />
            <Input label={'Decimals'} field={'decimals'} type={'number'} span={12} />
            <Button text={'Deploy'} additionalClasses="submit-form mb-4"></Button>
        </div>
    )
    const content = (
        <div>
            <Title text={'# Home'}></Title>
            <SubTitle text={'# ERC-20'}></SubTitle>
            <Paragraph
                text={
                    'The ERC-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes each Token be exactly the same (in type and value) of another Token. ' +
                    'For example, an ERC-20 Token acts just like the ETH, meaning that 1 Token is and will always be equal to all the other Tokens.'
                }
            />
            <Paragraph
                text={
                    'The ERC-20 (Ethereum Request for Comments 20), proposed by Fabian Vogelsteller in November 2015, is a Token Standard that implements an API for tokens within Smart Contracts. ' +
                    'It provides functionalities like to transfer tokens from one account to another, to get the current token balance of an account and also the total supply of the token available on the network. ' +
                    'Besides these it also has some other functionalities like to approve that an amount of token from an account can be spent by a third party account.'
                }
            />
            <SubTitle text={'# Purpose'}></SubTitle>
            <Paragraph
                text={
                    'This R&D project aim to simplify the creation process of an ERC-20, giving to everyone the chance to test the technology without having the initial knowledge to do that at low level. '
                }
            />
            <SubTitle text={'# Form'}></SubTitle>
            <Form action={'#'} method={'GET'} content={formContent} />
        </div>
    )

    return <Page content={content} />
}

export default Home
