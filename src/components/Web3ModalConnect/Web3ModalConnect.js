import React, { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { shortenEthAddress, web3Providers } from '../../utils/web3Utils'
import Button from '../Button'
import SecondaryButton from '../SecondaryButton'
import Modal from '../Modal'
import Paragraph from '../Paragraph'
import LoadingLine from '../LoadingLine'

const Web3ModalConnect = () => {
    const { connector, account, activate, deactivate, active } = useWeb3React()

    const [activeConnector, setActiveConnector] = useState(undefined)
    const [activatingConnector, setActivatingConnector] = useState(undefined)
    const [modalOpened, setModalOpened] = useState(false)

    const buttonText = active ? shortenEthAddress(account) : 'web3'
    const modalContent = (
        <div>
            <Paragraph
                text={
                    'Ethereum wallets are applications that let you interact with your Ethereum account. Think of it like an internet banking app – without the bank. ' +
                    'Your wallet lets you read your balance, send transactions and connect to applications.'
                }
            />
            {web3Providers.map((web3Provider) => {
                const activeProvider =
                    active &&
                    connector &&
                    activeConnector === web3Provider.provider &&
                    connector instanceof web3Provider.connector
                const activatingProvider = activatingConnector && activatingConnector === web3Provider.provider
                const connectWeb3 = () => {
                    if (active) {
                        setActivatingConnector(undefined)
                        setActiveConnector(undefined)
                        deactivate()
                    } else {
                        if (connector instanceof WalletConnectConnector) {
                            connector.walletConnectProvider = undefined
                        }

                        setActivatingConnector(web3Provider.provider)
                        setActiveConnector(web3Provider.provider)
                        activate(web3Provider.provider)
                    }
                }
                const buttonProperties = {
                    key: web3Provider.code,
                    text: activatingProvider ? <LoadingLine /> : web3Provider.label,
                    additionalClasses: `width-full mb-3 ${
                        web3Provider.desktop && 'hidden sm:block md:block lg:block xl:block 2xl:block'
                    } connector-${web3Provider.code}`,
                    disabled: active && activeConnector && activeConnector !== web3Provider.provider,
                    onClickHandler: connectWeb3,
                }

                return activeProvider ? (
                    <Button {...buttonProperties}></Button>
                ) : (
                    <SecondaryButton {...buttonProperties}></SecondaryButton>
                )
            })}
        </div>
    )

    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    return (
        <>
            <Button
                text={buttonText}
                additionalClasses="web3-connect"
                onClickHandler={() => setModalOpened(true)}
            ></Button>
            <Modal
                title={'# Web3'}
                content={modalContent}
                opened={modalOpened}
                onClickDismissHandler={() => setModalOpened(false)}
            ></Modal>
        </>
    )
}

export default Web3ModalConnect
