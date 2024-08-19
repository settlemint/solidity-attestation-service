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
    const address = jsonData['EASDeployment#SchemaRegistry']
    const val = await hre.ignition.deploy(SchemaRegistrationModule, {
      parameters: {
        SchemaRegistrationModule: {
          address: address,
          schema: 'bool gm',
          resolverAddress: '0x0000000000000000000000000000000000000',
          revocable: false
        },
      },
    });

    console.log('Schema registered:', val);
  } catch (err) {
    console.error('Error:', err);
  }
}

main().catch(console.error);