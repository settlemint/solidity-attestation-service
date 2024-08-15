// SPDX-License-Identifier: FSL-1.1-MIT
pragma solidity ^0.8.26;

import "@ethereum-attestation-service/eas-contracts/contracts/EAS.sol";

// slither-disable-start all
contract CustomEAS is EAS {
    constructor(ISchemaRegistry registry) EAS(registry) { }
}
// slither-disable-end all