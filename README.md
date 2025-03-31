![logo](https://github.com/settlemint/solidity-attestation-service/blob/main/OG_Solidity.png)

✨ [https://settlemint.com](https://settlemint.com) ✨

Build your own blockchain usecase with ease.

[![CI status](https://github.com/settlemint/solidity-attestation-service/actions/workflows/solidity.yml/badge.svg?event=push&branch=main)](https://github.com/settlemint/solidity-attestation-service/actions?query=branch%3Amain) [![License](https://img.shields.io/npm/l/@settlemint/solidity-attestation-service)](https://fsl.software) [![npm](https://img.shields.io/npm/dw/@settlemint/solidity-attestation-service)](https://www.npmjs.com/package/@settlemint/solidity-attestation-service) [![stars](https://img.shields.io/github/stars/settlemint/solidity-attestation-service)](https://github.com/settlemint/solidity-attestation-service)

[Documentation](https://console.settlemint.com/documentation/) • [Discord](https://discord.com/invite/Mt5yqFrey9) • [NPM](https://www.npmjs.com/package/@settlemint/solidity-attestation-service) • [Issues](https://github.com/settlemint/solidity-attestation-service/issues)

## Get started

Launch this smart contract set in SettleMint under the `Smart Contract Sets` section. This will automatically link it to your own blockchain node and make use of the private keys living in the platform.

If you want to use it separately, bootstrap a new project using

```shell
forge init my-project --template settlemint/solidity-attestation-service
```

Or if you want to use this set as a dependency of your own,

```shell
bun install @settlemint/solidity-attestation-service
```

## DX: Foundry & Hardhat hybrid

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

**Hardhat is a Flexible, Extensible, Fast Ethereum development environment for professionals in typescript**

Hardhat consists of:

- **Hardhat Runner**: Hardhat Runner is the main component you interact with when using Hardhat. It's a flexible and extensible task runner that helps you manage and automate the recurring tasks inherent to developing smart contracts and dApps.
- **Hardhat Ignition**: Declarative deployment system that enables you to deploy your smart contracts without navigating the mechanics of the deployment process.
- **Hardhat Network**: Declarative deployment system that enables you to deploy your smart contracts without navigating the mechanics of the deployment process.

## Documentation

- Additional documentation can be found in the [docs folder](./docs).
- [SettleMint Documentation](https://console.settlemint.com/documentation/docs/using-platform/dev-tools/code-studio/smart-contract-sets/deploying-a-contract/)
- [Foundry Documentation](https://book.getfoundry.sh/)
- [Hardhat Documentation](https://hardhat.org/hardhat-runner/docs/getting-started)


