import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, foundry } from 'wagmi/chains'

export const config = createConfig({
  chains: [foundry, mainnet, sepolia],
  transports: {
    [foundry.id]: http('http://127.0.0.1:8545'),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
