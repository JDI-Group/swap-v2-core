// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract XDGToken is Initializable, ERC20Upgradeable, UUPSUpgradeable {
    address public owner;
    address public xdgPair;
    mapping(address => uint256) public liquidityShare;

    event LiquidityShare(address provider, uint256 amount);

    modifier onlyOwner() {
        require(owner == _msgSender(), "Not authorized");
        _;
    }

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize(
        address _initialOwner,
        uint256 totalSupply
    ) public initializer {
        __ERC20_init("XDGToken", "XDG");
        __UUPSUpgradeable_init();

        owner = _initialOwner;
        _mint(msg.sender, totalSupply * 10 ** 18);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function transferAdminship(address newAdmin) external onlyOwner {
        owner = newAdmin;
    }

    function setXdgPair(address _sdgPair) external onlyOwner {
        xdgPair = _sdgPair;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        super._beforeTokenTransfer(from, to, amount);

        if (to == xdgPair && xdgPair != address(0)) {
            liquidityShare[from] += amount;
            emit LiquidityShare(from, amount);
        }

        if (from == xdgPair && xdgPair != address(0)) {
            require(liquidityShare[to] >= amount, "Not enough liquidityShare");
            liquidityShare[to] -= amount;
            emit LiquidityShare(to, amount);
        }
    }
}
