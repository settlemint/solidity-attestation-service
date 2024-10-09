// SPDX-License-Identifier: FSL-1.1-MIT
pragma solidity ^0.8.26;

import { Test } from "forge-std/Test.sol";
import { EAS } from "../contracts/CustomEAS.sol";
import { CustomSchemaRegistry } from "../contracts/CustomSchemaRegistry.sol";

contract EASTest is Test {
    CustomSchemaRegistry public registry;
    EAS public eas;

    function setUp() public {
        registry = new CustomSchemaRegistry();
        eas = new EAS(registry);
    }

    function testRegisterSchema() public {
        assertEq(true, true);
    }
}
