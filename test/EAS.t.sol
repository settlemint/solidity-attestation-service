// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { Test, console } from "forge-std/Test.sol";
import { EAS } from "../contracts/CustomEAS.sol";
import { CustomSchemaRegistry } from "../contracts/CustomSchemaRegistry.sol";

contract EASTest is Test {
    CustomSchemaRegistry registry;
    EAS eas;

    function setUp() public {
        registry = new CustomSchemaRegistry();
        eas = new EAS(registry);
    }

    function testRegisterSchema() public {
        assertEq(true, true);
    }
}
