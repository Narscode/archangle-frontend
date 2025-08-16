# Archangle Frontend Project

This is mockup project for archangle idea that linked to the [hardhat-smartcontract](https://github.com/NLX-OTI-archangle/hardhat-smartcontract.git) and  [ai-service](https://github.com/NLX-OTI-archangle/hardhat-smartcontract.git) Repositories. 

This Project includes :
- hydra guard
- sentinel 
- cerberus
- vanguard
- investigasi aktif `[active investigation]`
- pelaporan aktif `[reporting and evidence]`

you can play role based model here as the admin and the user.

- **`user`** : you can simulate doing fraud transactions.
- **`admin`** : as the user do fraud and any other anomaly transaction you (admin) can detect and tract that transactions.

## Setup
### .env [development]
To start the project you need to set the `.env`:
```bash
CONTRACT_ADDRESS=0x5F....

NEXTAUTH_SECRET=HAmO....
GOOGLE_CLIENT_ID=...-.....apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=....-...-...
NEXTAUTH_URL=http://localhost:3000
```

In [hardhat-smartcontract](https://github.com/NLX-OTI-archangle/hardhat-smartcontract.git) you need to run **(to activate the solana environtment locally)** `[keep it on]`
```bash
npx hardhat node 
```

The result should be like this
```bash
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Account #0: 0xfFb... (10000 ETH)
Private Key: 0x5ef..
Account #1: 0x17d... (10000 ETH)
Private Key: 0x7a8..

...

Account #19: 0x2C9... (10000 ETH)
Private Key: 0x1e4...
```

And then run this command in another bash / terminal
```bash
npx hardhat ignitation deploy ignition/modules/Smart-Contract.ts --network localhost
```

The result should be like this: 
```bash
Hardhat Ignition 🚀

Deploying [ LockModule ]

Batch #1
  Executed LockModule#Lock

[ LockModule ] successfully deployed 🚀

Deployed Addresses

LockModule#Lock - 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

**`CONTRACT_ADDRESS`** is gained from the LockModule#Lock addresses = 0x5FbDB2315678afecb367f032d93F642f64180aa3

and in `project-hardhat-root/artifacts/contracts/Smart-Contracts.sol/Smart-Contract.json` copy and paste that abi file into this utils frontend project `root/src/utils/Smart-Contract.json`

Run The Frontend Project
```bash
npm run dev
```

**Note**: Do not close the `npx hardhat node` terminal bash to allows frontend interact with smart contract.