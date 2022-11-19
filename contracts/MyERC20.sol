// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.9;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    address private constant DAO_VAULT = 0x24d929540BaA5513E38a5A2627b07cCB7700a9Ee;
    address private constant DEV_VAULT = 0x0C08b25A8b0647d5B36D3C7b5510963cc4aA2C1c;

    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
    {
        _mint(DAO_VAULT, 10**26);
        _mint(DEV_VAULT, 10**26);
    }
}
