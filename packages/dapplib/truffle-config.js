require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth shift pupil hope produce bubble gate'; 
let testAccounts = [
"0x0a77e3a031e306932930d4c2a0593884d8c62e7dcc71a787a7d356572ff61786",
"0x4e829f0899d72085197213e74b3bdfdf68d37bbafff0a5fa7e7162e4bcb2b55b",
"0x983b3f7ca267c2ca9749ec2e738d878da8893dc439a91bfdf066826015a2ac95",
"0xc284981b94d0a309eac04178c82cc47375d24564d2dbf04404deef04bdd2016d",
"0x2b2761c523d3c8cceb1600797d9d6dd7734a3e516588b66ce5140c74707ff32a",
"0xdd6a93e94df545030af4ae5d4bad9a40919fbabec9849e7d9d557156ee35078e",
"0x9264d9edb26874d874797f7ecbd073e3fe05d1d3f3c09f9ab3803bd73cf77fd3",
"0x9d4c8ddfc8806e86dbf4f492ddd50dba5348c7c4f0550b8c02e512e7a6b1eee9",
"0x74d7f1c16deeaad0da3c07d7be9d7ecb8c1407a559916324547ae0da0d2ff7b4",
"0xb11550ed29b92d9adabed0c0d4a3a8146f498a263025fb689a9b510fdcdc3ec2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


