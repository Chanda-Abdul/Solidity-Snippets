import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";


const factory = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x7D4258a064332C206EDEFfc3B49E6D4B516dFbcA"
);
console.log(factory._address)
// console.log(factory.methods.deployedCampaigns("0x7D4258a064332C206EDEFfc3B49E6D4B516dFbcA").arguments[0])

// console.log(factory.methods.getDeployedCampaigns().call());

export default factory;



