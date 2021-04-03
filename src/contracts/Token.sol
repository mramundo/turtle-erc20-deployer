// contracts/Token.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token is ERC20 {
    uint8 private _decimals;

    constructor(
        string memory tokenName,
        string memory tokenSymbol,
        uint8 tokenDecimals,
        uint256 initialSupply
    ) ERC20(tokenName, tokenSymbol) {
        _decimals = tokenDecimals;
        _mint(msg.sender, initialSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}
