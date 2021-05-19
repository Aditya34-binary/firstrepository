const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
//const { interface, bytecode } = require('./compile');
const compiledFile = require("./compile");
 
const interface = compiledFile.abi;
const bytecode = compiledFile.evm.bytecode.object;


let accounts;
let inbox;

beforeEach(async () => {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [' Hi there! '] })
    .send({ from : accounts[0], gas: '1000000'})
    //Use one of those accounts to deploy the contract
});

describe('Inbox', () => {
    it('deploy a contract', () => {
        console.log(inbox);
    });
});
























// class Car{
//     park() {
//         return 'stopped';
//     }

//     drive(){
//         return 'vroom';
//     }
// }

// let car;

// beforeEach(() => {
//     car = new Car();
// });

// describe('Car', () =>{
//     it('can park', ()=> {
//         assert.equal(car.park(), 'stopped');
//     });
//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     });
// });