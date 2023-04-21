// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.8.4;

import "./WannseePair.sol";

contract CallHash {
    function getInitHash() public pure returns(bytes32){
        bytes memory bytecode = type(WannseePair).creationCode;
        return keccak256(abi.encodePacked(bytecode));
    }
}