import { ContractFactory } from '@ethersproject/contracts'

export const deployContract = async (library, account, abi, bytecode, args) => {
    const signer = getSigner(library, account)
    const factory = new ContractFactory(abi, bytecode, signer)

    // TODO:
    // Find a workaround for deploy a contract with a JsonRpcUncheckedSigner.
    // ContractFactory.deploy internally calls getContractAddress method that uses transaction.from field for get the address of the newly deployed Contract.
    // While submitting the deploy transaction using a JsonRpcUncheckedSigner, the from field is not populated and getContractAddress method throw an exception.
    // I can submit a deploy transaction usign the ethersproject Wallet object, but this will require saving the user private key somewhere and I don't want to-
    // I checked Uniswap's UI implementation for getting the right signer, but they use `library.getSigner(account).connectUnchecked()`
    try {
        await factory.deploy(...args)
    } catch {}
}

export const getSigner = (library, account) => {
    return library.getSigner(account).connectUnchecked()
}
