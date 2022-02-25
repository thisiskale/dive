require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/aSBer4M6-QsjevA1BgIuJDjxsndnZs20',
      accounts: [ 'c74e16925998d7efc738803bb4ff283b1f4e913c3dd10c12f1bd866e63163392' ]
    }
  }
}