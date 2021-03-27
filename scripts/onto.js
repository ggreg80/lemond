// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')
const { ethers, upgrades } = require('hardhat')
const BigNumber = require('bignumber.js')
const web3 = require('web3')

const LEMD = artifacts.require("./LEMD")
const ONOTAirdrop = artifacts.require("./ONOTAirdrop.sol")

async function main() {
  await hre.run('compile')

  this.deployer = (await ethers.getSigners())[0].address
  console.log('deployer address',this.deployer)
  
  // this.LEMD = await LEMD.new()
  // console.log('LEMD',this.LEMD.address)

  this.LEMD = await hre.ethers.getContractAt(
     'LEMD',
     '0xE667d8bD182D165D2E71cF72315bD117f6940094'
   )

  // this.oNOTAirdrop = await ONOTAirdrop.new('0xE667d8bD182D165D2E71cF72315bD117f6940094',1616770800)
  // console.log('ONOTAirdrop',this.oNOTAirdrop.address)

  // await this.LEMD.addMinter(this.deployer)
  await this.LEMD.mint(this.deployer,hre.ethers.utils.parseEther("30000"))
  // await this.LEMD.approve(
  //   this.oNOTAirdrop.address,
  //   '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  // )

  // await this.oNOTAirdrop.unpack(hre.ethers.utils.keccak256(this.deployer))
  // console.log(hre.ethers.utils.formatEther((await this.LEMD.balanceOf(this.deployer)).toString()).toString())

  // await this.oNOTAirdrop.unpack(hre.ethers.utils.keccak256(this.deployer))
  // console.log(hre.ethers.utils.formatEther((await this.LEMD.balanceOf(this.deployer)).toString()).toString())

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
