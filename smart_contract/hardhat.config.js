// https://eth-goerli.g.alchemy.com/v2/RUM21tWJcPytE7Wog3NT9SXAEsh7Ro3i

require('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/RUM21tWJcPytE7Wog3NT9SXAEsh7Ro3i',
      accounts: ['837cd75618c29c1f0ba0731feb33b4cd550a699007aed14637b8197f5ff871f2']
    }
  }
}

