import { ContractFactory } from '@ethersproject/contracts'

export const deployContract = async (library, account, abi, bytecode, args) => {
    const signer = getSigner(library, account)
    const factory = new ContractFactory(abi, bytecode, signer)
    const contract = await factory.deploy(...args)
    const transaction = await contract.deployTransaction.wait()

    return {
        contract: contract,
        transaction: transaction,
    }
}

export const getSigner = (library, account) => {
    return library.getSigner(account)
}
