require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind artwork hidden knee occur tattoo'; 
let testAccounts = [
"0xcbfc87ac6f4dbfbfba065ba1421398779d32d23024a3a0f1bc42d048e9eed514",
"0x067d7de70e29235a8fc2fbe9ccd36c5ad887252820ed5c6eeba05e2a2d2e6ac3",
"0xd6d75401986850ca8ca418d7417df23f8697531747e55dc5a95de4f6a23de71d",
"0x56e4c52ccc33765c29ac4adbf28d978d7669b09214bf601e46ecf93847f953ec",
"0xdc8d9234398c838951626d964e32b0446ccf8771e0e826c2590ee59c4cda0297",
"0x12685799bedd8156b92b32a478898cb0ceef0f3aa0bf5b480b8d6d4251a2bfd4",
"0xbc57dc99362667d70618a47bf0b770ddf70507365b2bc8ee44d5785f89ff8b88",
"0x900574c45fd8830affcc7cd42b517d2d1c303c328b46d437b71c3a2f70871290",
"0x41db23b8f15cdc8d868c69a95395ab6c91a9f3fbd81b8d3cfb367cf123963ce8",
"0xf5766f1a39252d2bdb0424ed978778a0e056554480e43e2081311bffd5b0cdea"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
