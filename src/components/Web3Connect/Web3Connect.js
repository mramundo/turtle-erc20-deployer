import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { web3ConnectorInjected, shortenEthAddress } from '../../utils/web3Utils'
import Button from '../Button'
import LoadingDots from '../LoadingDots'

const Web3Connect = () => {
    const { connector, account, activate, deactivate, active } = useWeb3React()
    const [activatingConnector, setActivatingConnector] = useState(undefined)

    const connectWeb3 = () => {
        if (!active) {
            setActivatingConnector(web3ConnectorInjected)
            activate(web3ConnectorInjected)
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
    ) : activatingConnector === web3ConnectorInjected ? (
        <LoadingDots />
    ) : (
        'web3'
    )

    return <Button text={text} additionalClasses="web3-connect" onClickHandler={connectWeb3}></Button>
}

export default Web3Connect
