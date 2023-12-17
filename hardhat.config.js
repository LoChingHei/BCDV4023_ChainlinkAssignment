require('dotenv').config({ path: __dirname + "/.env"});
require("@nomiclabs/hardhat-waffle");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   defaultNetwork: "sepolia",
	   networks: {
	      hardhat: {},
	      sepolia: {
	         url: `https://eth-sepolia.g.alchemy.com/v2/${API_URL}`,
	         accounts: [PRIVATE_KEY]
	      }
	   },
     solidity: {
        version: "0.8.7",
     }
	}