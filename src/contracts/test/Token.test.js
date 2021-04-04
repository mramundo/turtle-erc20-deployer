import { expect, use } from 'chai'
import { deployContract, MockProvider, solidity } from 'ethereum-waffle'
import Token from '../abi/Token.json'

use(solidity)

describe('Token', () => {
    let token = undefined
    const [wallet, walletTo] = new MockProvider().getWallets()

    beforeEach(async () => {
        token = await deployContract(wallet, Token, ['Token', 'TKN', 18, 1000])
    })

    it('Assigns initial balance', async () => {
        expect(await token.balanceOf(wallet.address)).to.equal(1000)
    })

    it('Transfer adds amount to destination account', async () => {
        await token.transfer(walletTo.address, 7)
        expect(await token.balanceOf(walletTo.address)).to.equal(7)
    })

    it('Transfer emits event', async () => {
        await expect(token.transfer(walletTo.address, 7))
            .to.emit(token, 'Transfer')
            .withArgs(wallet.address, walletTo.address, 7)
    })

    it('Can not transfer above the amount', async () => {
        await expect(token.transfer(walletTo.address, 1007)).to.be.reverted
    })

    it('Can not transfer from empty account', async () => {
        const tokenFromOtherWallet = token.connect(walletTo)
        await expect(tokenFromOtherWallet.transfer(wallet.address, 1)).to.be.reverted
    })

    it('Calls totalSupply on Token contract', async () => {
        await token.totalSupply()
        expect('totalSupply').to.be.calledOnContract(token)
    })

    it('Calls balanceOf with sender address on Token contract', async () => {
        await token.balanceOf(wallet.address)
        expect('balanceOf').to.be.calledOnContractWith(token, [wallet.address])
    })
})
