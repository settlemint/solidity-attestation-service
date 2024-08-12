import { readFileSync } from 'fs';
import hre, { network } from 'hardhat';
import { RegistryContract } from '../ignition/modules/main';

async function main() {
//   const schemaExists = await run('check-schema');

//   if (!schemaExists) {
//     throw new Error('You have not created any schema.');
//   }
  const chainIdHex = await network.provider.send('eth_chainId');
  const chainId = String(parseInt(chainIdHex, 16));

  try {
    const jsonData = JSON.parse(
      readFileSync(
        `./ignition/deployments/chain-${chainId}/deployed_addresses.json`,
        'utf8'
      )
    );
    const address = jsonData['RegistryModule#Registry'];
    const { registry } = await hre.ignition.deploy(RegistryContract, {
      parameters: {
        RegistryContract: { address: address },
      },
    });
  } catch (err) {
    console.error('Error:', err);
  }
}

main().catch(console.error);
