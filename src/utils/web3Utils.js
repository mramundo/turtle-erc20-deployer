import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

export const web3InjectedChainId = [1, 3, 4, 5, 42]

export const web3RpcChainId = {
    1: process.env.REACT_APP_RPC_MAINNET_URL,
}

export const web3ConnectorInjected = new InjectedConnector({
    supportedChainIds: web3InjectedChainId,
})

export const web3ConnectorWalletConnect = new WalletConnectConnector({
    rpc: web3RpcChainId,
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 12000,
})

export const getWeb3Library = (provider) => {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}

export const shortenEthAddress = (address) => {
    address = address ? address.slice(0, 6) + '...' + address?.slice(38, 42) : undefined
    return address
}
