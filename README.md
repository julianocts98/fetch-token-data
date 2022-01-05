# Fetch token data

A simple study project who aims to fetch ERC-20 token data from the Binance Smart Chain through  a simple NodeJS server and populate a simple formated HTML.

# Explanation

Binance Smart Chain is a hard fork of the Go Ethereum protocol, and because of that they share a lot of similarities. One of then is the use of the ERC-20 standard, which is a standard for creating Fungible Tokens within the blockchain.

These tokens are created and managed through the Smart Contracts that are deployed on the Ethereum Virtual Machine (EVM).

To be able to fetch data of the blockchain, we'll use the **web3** library, and we'll also be reading a file with the standard ABI for ERC-20 tokens so we can fetch any basic data of whatever token we want to.

# HOW TO RUN

1. Clone the repository.
2. Run `npm install` inside the folder.
3. Run `npm start`.

# TODO
- Improve CSS stylization.