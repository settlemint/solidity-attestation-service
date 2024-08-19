import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const CustomEASModule = buildModule('EASDeployment', (m) => {
    const schemaRegistry = m.contract("SchemaRegistry", [], {});
    const EAS = m.contract("EAS", [schemaRegistry], {});

    return { schemaRegistry, EAS };

});

const SchemaRegistrationModule = buildModule('SchemaRegistrationModule', (m) => {
  const schemaAddress = m.getParameter('address');
  const schemaContract = m.contractAt('SchemaRegistry', schemaAddress);

  const schema = m.getParameter('schema');
  const resolverAddress = m.getParameter('resolverAddress')
  const revocable = m.getParameter('revocable');

  m.call(schemaContract, 'register', [schema, resolverAddress, revocable]);
  console.log('Schema registered:', schema);
  return { schemaContract };
});

export default CustomEASModule;
export { SchemaRegistrationModule };