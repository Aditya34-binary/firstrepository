const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
//const { interface, bytecode } = require('./compile');
const compiledFile = require("./compile");
 
const interface = compiledFile.abi;
const bytecode = compiledFile.evm.bytecode.object;

const provider = new HDWalletProvider(
    'search quiz flock win frown erase float brick song wonder key flame',
    'https://rinkeby.infura.io/v3/4fa50e0e948542e691a0bc18678261f8'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send({ gas: '1000000', from: accounts[0]});
    console.log('Contract deployed to', result.options.address);
    //console.log(interface);
    //console.log(bytecode);
};
deploy();