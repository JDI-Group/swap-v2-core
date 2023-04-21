pragma solidity =0.5.16;

import '../WannseeERC20.sol';

contract ERC20 is WannseeERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
