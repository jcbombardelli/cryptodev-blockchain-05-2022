const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require('ethers');


describe('Token', () => {
  
  it('teste de exemplo', async () => {

    const [owner, wallet1] = await ethers.getSigners();

    const CryptoToken = await ethers.getContractFactory('CryptoToken');
    const crypto = await CryptoToken.deploy(1000);

    await crypto.deployed();

    const totalSupplyExpected = 1000;
    const totalSupplyResult = await crypto.totalSupply()

    expect(totalSupplyExpected).to.equal(totalSupplyResult)

    const balance = await crypto.balanceOf(owner.address)

    BigNumber.from


  })
  
})