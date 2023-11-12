// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IERC20 {
  function balanceOf(address account) external view returns (uint256);

  function transfer(address recipient, uint256 amount) external returns (bool);
}

contract BatchTransfer {
  address public admin;
  uint256 public batchNumsMax = 10;
  mapping(address => bool) public owners;

  constructor() {
    admin = msg.sender;
    owners[msg.sender] = true;
  }

  modifier onlyOwner() {
    require(owners[msg.sender], "Not owner");
    _;
  }

  modifier onlyAdmin() {
    require(msg.sender == admin, "Not admin");
    _;
  }

  function setOwner(address _owner, bool _isOwner) public onlyAdmin {
    owners[_owner] = _isOwner;
  }

  function setBatchNumsMax(uint256 _nums) public onlyAdmin {
    batchNumsMax = _nums;
  }

  function withdrawToken(
    address token,
    address to,
    uint256 amount
  ) public onlyAdmin {
    require(to != address(0), "Don't allow to send to zero address");

    IERC20 erc20 = IERC20(token);
    uint256 balance = erc20.balanceOf(address(this));
    require(balance >= amount, "Not enough tokens in contract");
    erc20.transfer(to, amount);
  }

  function batchTransfer(
    address token,
    address[] calldata recipients,
    uint256[] calldata amounts
  ) external onlyOwner {
    require(
      recipients.length == amounts.length,
      "Recipients and amounts length mismatch"
    );
    require(recipients.length <= batchNumsMax, "Overflow nums at a time");

    IERC20 erc20 = IERC20(token);
    uint256 totalAmount;
    for (uint256 i = 0; i < amounts.length; i++) {
      totalAmount += amounts[i];
    }

    require(
      erc20.balanceOf(address(this)) >= totalAmount,
      "Not enough tokens in contract"
    );

    for (uint256 i = 0; i < recipients.length; i++) {
      require(erc20.transfer(recipients[i], amounts[i]), "Transfer failed");
    }
  }
}
