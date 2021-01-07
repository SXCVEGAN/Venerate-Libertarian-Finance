const BigNumber = require('bignumber.js');
const VLFTOken = artifacts.require('./VLF.sol');

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        VLFtoken, 
        accounts[1],
        new BigNumber(10).pow(18).multipliedBy(525).toString(10),
    );
};
