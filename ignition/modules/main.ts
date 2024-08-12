import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const CustomEASModule = buildModule('EASDeployment', (m) => {
    const schemaRegistry = m.contract("SchemaRegistry", [], {});
    const EAS = m.contract("EAS", [schemaRegistry], {});

    return { schemaRegistry, EAS };

});

const SchemaRegistrationModule = buildModule('SchemaRegistration', (m) => {
  const schemaAddress = m.getParameter('address');
  const schemaContract = m.contractAt('SchemaContract', schemaAddress);
  m.call(schemaContract, 'registerSchema');

  return { schemaContract };
});


export default CustomEASModule;
export { SchemaRegistrationModule };
