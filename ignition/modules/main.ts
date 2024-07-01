import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const CustomEASModule = buildModule('EASDeployment', (m) => {
    const schemaRegistry = m.contract("SchemaRegistry", [], {});
    const EAS = m.contract("EAS", [schemaRegistry], {});

    return { schemaRegistry, EAS };

});

export default CustomEASModule;