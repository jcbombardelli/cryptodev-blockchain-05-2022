const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {

    const [owner, wallet1] = await ethers.getSigners();

    const Greeter = await ethers.getContractFactory("Greeter", owner) 
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    const result1 = await greeter.greet()
    expect(result1).to.equal("Hello, world!");

    //const ownerContract = greeter;
    //const wallet1Contract = greeter.connect(wallet1);
    //const wallet2Contract = greeter.connect(wallet2);

    const setGreetingTx = await greeter.connect(wallet1).setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();


    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
