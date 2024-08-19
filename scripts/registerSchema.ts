import { readFileSync } from 'fs';
import hre, { network } from 'hardhat';
import { SchemaRegistrationModule } from '../ignition/modules/main';

async function main() {

  const chainIdHex = await network.provider.send('eth_chainId');
  const chainId = String(parseInt(chainIdHex, 16));

  try {
    const jsonData = JSON.parse(
      readFileSync(
        `./ignition/deployments/chain-${chainId}/deployed_addresses.json`,
        'utf8'
      )
    );
    const address = jsonData['CustomEASModule#SchemaRegistry'];
    const { schemaContract } = await hre.ignition.deploy(SchemaRegistrationModule, {
      parameters: {
        SchemaRegistrationModule: { 
          schema: 'uint256 eventId, uint8 voteIndex', 
          resolverAddress: '0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0', 
          revocable: false 
        },
      },
    });
  } catch (err) {
    console.error('Error:', err);
  }
}

main().catch(console.error);