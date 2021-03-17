import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { web3ConnectorWalletConnect, shortenEthAddress } from '../../utils/web3Utils'
import Button from '../Button'
import LoadingDots from '../LoadingDots'

const MobileWeb3Connect = () => {
    const { connector, account, activate, deactivate, active } = useWeb3React()
    const [activatingConnector, setActivatingConnector] = useState(undefined)

    const connectWeb3 = () => {
        if (!active) {
            if (connector instanceof WalletConnectConnector) {
                connector.walletConnectProvider = undefined
            }

            setActivatingConnector(web3ConnectorWalletConnect)
            activate(web3ConnectorWalletConnect)
        } else {
            deactivate()
        }
    }

    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    const text = active ? (
        shortenEthAddress(account)
    ) : activatingConnector === web3ConnectorWalletConnect ? (
        <LoadingDots />
    ) : (
        'web3'
    )

    return <Button text={text} additionalClasses="web3-connect" onClickHandler={connectWeb3}></Button>
}

export default MobileWeb3Connect
