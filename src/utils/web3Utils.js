import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

export const web3InjectedChainId = [1, 3, 4, 5, 42]

export const web3RpcChainId = {
    1: process.env.REACT_APP_RPC_MAINNET_URL,
}

export const web3RpcNetworkUrl = process.env.REACT_APP_RPC_MAINNET_URL

export const web3ConnectorInjected = new InjectedConnector({
    supportedChainIds: web3InjectedChainId,
})

export const web3ConnectorWalletConnect = new WalletConnectConnector({
    rpc: web3RpcChainId,
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 12000,
})

export const web3ConnectorWalletLink = new WalletLinkConnector({
    url: web3RpcNetworkUrl,
    appName: 'turtle-erc20-deployer',
    appLogoUrl: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/turtle_1f422.png',
})

export const web3Providers = [
    {
        code: 'injected',
        label: 'Metamask',
        provider: web3ConnectorInjected,
        connector: InjectedConnector,
        desktop: true,
    },
    {
        code: 'wallet-connect',
        label: 'WalletConnect',
        provider: web3ConnectorWalletConnect,
        connector: WalletConnectConnector,
    },
    {
        code: 'wallet-link',
        label: 'WalletLink',
        provider: web3ConnectorWalletLink,
        connector: WalletLinkConnector,
    },
]

export const getWeb3Library = (provider) => {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}

export const shortenEthAddress = (address) => {
    address = address ? address.slice(0, 6) + '...' + address?.slice(38, 42) : undefined
    return address
}
