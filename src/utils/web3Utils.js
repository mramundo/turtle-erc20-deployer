import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'

/**
 * Mainnet: 1
 * Ropsten: 3
 * Rinkeby: 4
 * Görli: 5
 * Kovan: 42
 */
export const web3ChainId = [1, 3, 4, 5, 42]

export const web3ConnectorInjected = new InjectedConnector({
    supportedChainIds: web3ChainId,
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
