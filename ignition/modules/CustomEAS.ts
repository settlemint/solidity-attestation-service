import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EASDeploymentModule = buildModule("EASDeployment", (m) => {
  const ethAddress = "0x1234567890abcdef1234567890abcdef12345678";
  const EAS = m.contract("EAS", [ethAddress], {});

  return { EAS };
});

export default EASDeploymentModule;
