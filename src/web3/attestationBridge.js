import {uport}from "../util/connectors.js";

// This would be done in a separate uPort managed app, the public address of which would be registered
// in the Bee Faucet contract. This allows us to verify the attestations generated by that app.

// To set this up go to the uPort app manager (https://appmanager.uport.me) and create an app or open a previously created one.
// Check the setup keys in the app are the same as those defined in util/connectors.js and copy the public key.
// Paste the public key into migrations/2_deploy_contracts.js to the const uPortAppPublicKey.
//
// Deploy the contracts to a test network. There are multiple networks we can use:
// The local test network testrpc, installed with 'npm i -g ethereumjs-testrpc' and launched with 'testrpc'. Start with this as it's simpler and quicker than using live networks.
//
// Alternatively use live test networks such as Rinkeby, Kovan or Ropsten.
// I use Rinkeby, as does uPort at the moment, for this you need Geth installed, you can do so with 'brew install ethereum'.
// Then launching Rinkeby I use the command: 'geth --networkid=4 --datadir=$HOME/.rinkeby --rpc --rpcapi db,eth,net,web3,personal --cache=1024 --rpcaddr=127.0.0.1 --bootnodes=enode://a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf@52.169.42.101:30303 --rpccorsdomain="*" --rpcport=8545 --port=30304 console'
//
// Once you have an ethereum chain running we can deploy the contracts. To do this open the console in the root Hive-Commons folder and type "truffle migrate --reset"
// If a chain is running on the default port: 8545 (as specified in the Hive-Commons/truffle.js file) the contracts should deploy.
export const generateUniquenessAttestation = (address) => {

    uport.attestCredentials({
        sub: address,
        claim: {
            "Uniqueness": "Is Unique / Hash of their passport number"
        },
        exp: new Date().getTime() + 365 * 24 * 60 * 60 * 1000, // 1 whole year! Length requires thought.
    })

}