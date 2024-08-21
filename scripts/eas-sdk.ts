import { SchemaRegistry } from '@ethereum-attestation-service/eas-sdk';
import { ethers } from 'ethers';
import { readFileSync } from 'fs';
import { network } from 'hardhat';


async function main() {

    const chainIdHex = await network.provider.send('eth_chainId');
    const chainId = String(parseInt(chainIdHex, 16));

    const jsonData = JSON.parse(
        readFileSync(
            `./ignition/deployments/chain-${chainId}/deployed_addresses.json`,
            'utf8'
        )
    );
    const schemaRegistryContractAddress = jsonData['EASDeployment#SchemaRegistry']
    const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);


    schemaRegistry.connect(signer);

    const schema = 'uint256 eventId, uint8 voteIndex';
    const resolverAddress = '0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0'; // Sepolia 0.26
    const revocable = true;

    const transaction = await schemaRegistry.register({
        schema,
        resolverAddress,
        revocable
    });

    // Optional: Wait for transaction to be validated
    await transaction.wait();
}