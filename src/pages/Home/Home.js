import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { parseUnits } from '@ethersproject/units'
import { BigNumber } from '@ethersproject/bignumber'
import { useToast } from '../../hooks/useToast'
import { deployContract } from '../../utils/deployContract'
import { etherscanLink, etherscanTypes, shortenEthAddress } from '../../utils/web3Utils'
import { abi, bytecode } from '../../contracts/abi/Token.json'
import CustomExternalLink from '../../components/CustomExternalLink'
import Page from '../../components/Page'
import Title from '../../components/Title'
import SubTitle from '../../components/SubTitle'
import Paragraph from '../../components/Paragraph'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Home = () => {
    const { account, library, chainId } = useWeb3React()
    const { toast } = useToast()

    const [name, setName] = useState('Token')
    const [symbol, setSymbol] = useState('TKN')
    const [decimals, setDecimals] = useState('18')
    const [supply, setSupply] = useState('1000000')

    const formValid = !!name && !!symbol && !!decimals && !!supply

    const formContent = (
        <div className="grid">
            <Input
                label={'Name'}
                field={'name'}
                type={'text'}
                placeholder={'Type the token name'}
                value={name}
                required={true}
                onChangeHandler={(event) => {
                    setName(event.target.value)
                }}
                span={12}
            />
            <Input
                label={'Symbol'}
                field={'symbol'}
                type={'text'}
                placeholder={'Type the token symbol'}
                value={symbol}
                required={true}
                onChangeHandler={(event) => {
                    setSymbol(event.target.value)
                }}
                span={12}
            />
            <Input
                label={'Decimals'}
                field={'decimals'}
                type={'number'}
                placeholder={'Type the token decimals'}
                value={decimals}
                required={true}
                onChangeHandler={(event) => {
                    setDecimals(event.target.value)
                }}
                span={12}
            />
            <Input
                label={'Supply'}
                field={'supply'}
                type={'number'}
                placeholder={'Type the token supply'}
                value={supply}
                required={true}
                onChangeHandler={(event) => {
                    setSupply(event.target.value)
                }}
                span={12}
            />
            <Button
                text={'Deploy'}
                additionalClasses="submit-form mb-4"
                disabled={!account || !formValid}
                onClickHandler={async () => {
                    try {
                        const uintDecimals = BigNumber.from(decimals)
                        const uintSupply = parseUnits(supply, uintDecimals)
                        const { contract } = await deployContract(library, account, abi, bytecode, [
                            name,
                            symbol,
                            uintDecimals,
                            uintSupply,
                        ])
                        const link = etherscanLink(chainId, contract.address, etherscanTypes.TOKEN)
                        const address = shortenEthAddress(contract.address)
                        const message = (
                            <>
                                {`Token ${symbol} deployed at address `}
                                <CustomExternalLink text={address} href={link} />
                                {`!`}
                            </>
                        )

                        toast.success(message)
                    } catch (error) {
                        toast.error(`Error deploying token ${symbol}`)
                        console.error(error)
                    }
                }}
            />
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
            <Form content={formContent} />
        </div>
    )

    return <Page content={content} />
}

export default Home
