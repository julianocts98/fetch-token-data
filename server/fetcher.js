const Web3 = require("web3");
const fs = require("fs");

const BSC_MAIN_ENDPOINT = "https://bsc-dataseed.binance.org/";
const STANDARD_TOKEN_ABI = JSON.parse(
  fs.readFileSync("./standard_token_abi.json")
);

async function fetchTokenDataByAddress(tokenAddress) {
  try {
    const tokenAddresChecksum = Web3.utils.toChecksumAddress(tokenAddress);
    const web3 = new Web3(BSC_MAIN_ENDPOINT);

    const tokenContract = new web3.eth.Contract(
      STANDARD_TOKEN_ABI,
      tokenAddresChecksum
    );

    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const decimals = await tokenContract.methods.decimals().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    const token = {
      tokenAddress: tokenAddresChecksum,
      name: name,
      symbol: symbol,
      decimals: decimals,
      totalSupply: totalSupply,
    };

    return token;
  } catch (error) {
    throw error;
  }
}

exports.fetchTokenDataByAddress = fetchTokenDataByAddress;
