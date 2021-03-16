import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { web3ConnectorWalletConnect, shortenEthAddress } from '../../utils/web3Utils'
import Button from '../Button'

const MobileWeb3Connect = () => {
    const { account, activate, deactivate, active } = useWeb3React()
    const connectWeb3 = () => {
        if (!active) {
            activate(web3ConnectorWalletConnect)
        } else {
            deactivate()
        }
    }
    const text = active ? shortenEthAddress(account) : 'web3'

    return <Button text={text} additionalClasses="web3-connect" onClickHandler={connectWeb3}></Button>
}

export default MobileWeb3Connect
