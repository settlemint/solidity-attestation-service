// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "@ethereum-attestation-service/eas-contracts/contracts/EAS.sol";

// slither-disable-start all
contract CustomEAS is EAS {
    constructor(ISchemaRegistry registry) EAS(registry) { }
}
// slither-disable-end all