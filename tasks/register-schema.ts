import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';
import { task } from 'hardhat/config';


task('register-schema', 'Registers a new schema')
    .setAction(async () => {

        // Initialize the sdk with the address of the EAS Schema contract address

        const provider = new ethers.JsonRpcProvider(process.env.BTP_RPC_URL);
        // Create a wallet instance with a private key
        const privateKey = "your-private-key-here";
        const wallet = new ethers.Wallet(privateKey);
        // Connect the wallet to the provider
        const signer = wallet.connect(provider);

        const schemaRegistryContractAddress = "0xYourSchemaRegistryContractAddress";
        const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

        schemaRegistry.connect(signer);

        const schema = "uint256 eventId, uint8 voteIndex";
        const resolverAddress = "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0"; // Sepolia 0.26
        const revocable = true;

        const transaction = await schemaRegistry.register({
            schema,
            resolverAddress,
            revocable,
        });

        // Optional: Wait for transaction to be validated
        await transaction.wait();

    });

