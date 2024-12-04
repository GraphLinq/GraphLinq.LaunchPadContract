import { ethers } from 'ethers';
import { MockERC20__factory } from '../dist/fundraiserlib.es.js'; // Ensure the file path is correct

describe('ERC20 Token Creator and Minter', function () {
  let owner;
  let provider;
  const ownerPrivateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

  // List of recipient addresses
  const recipients = [
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
  ];

  before(async function () {
    provider = new ethers.JsonRpcProvider('http://52.90.60.224:8545'); // Replace with your node URL
    owner = new ethers.Wallet(ownerPrivateKey, provider);
  });

  function generateRandomTokenName() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nameLength = 5;
    return Array.from({ length: nameLength }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
  }

  async function createAndMintERC20Token() {
    // Generate random token name and symbol
    const tokenName = `Token${generateRandomTokenName()}`;
    const tokenSymbol = tokenName.substring(0, 4);

    // Deploy the ERC20 token
    const mockERC20Factory = new MockERC20__factory(owner);
    const token = await mockERC20Factory.connect(owner).deploy(tokenName, tokenSymbol);
    await token.waitForDeployment();

    console.log(`Deployed ${tokenName} (${tokenSymbol}) at address: ${await token.getAddress()}`);

    // Mint 10000 units to each recipient
    const amountToMint = ethers.parseEther('10000');
    for (const recipient of recipients) {
      const tx = await token.mint(recipient, amountToMint);
      await tx.wait();
      console.log(`Minted ${ethers.formatEther(amountToMint)} ${tokenSymbol} to ${recipient}`);
    }
  }

  it('should create and mint new ERC20 tokens to recipients', async function () {
    await createAndMintERC20Token();
  });
});
