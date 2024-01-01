"use client";

import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import {
  arbitrum,
  base,
  celo,
  goerli,
  mainnet,
  optimism,
  polygon,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { env } from "@/env";

const stagingChains = [
  // celoAlfajores,
  goerli,
  // sepolia,
  // polygonMumbai,
  // arbitrumGoerli,
];

const productionChains = [arbitrum, base, celo, mainnet, polygon, optimism];

const availableChains =
  env.NODE_ENV === "development" ? stagingChains : productionChains;

const { chains, publicClient } = configureChains(
  [...availableChains],
  [
    alchemyProvider({
      apiKey: env.NEXT_PUBLIC_ALCHEMY_ID || "ajWJk5YwtfTZ5vCAhMg8I8L61XFhyJpa",
    }),
    infuraProvider({
      apiKey: env.NEXT_PUBLIC_INFURA_ID || "ae484befdd004b64bfe2059d3526a138",
    }),
    publicProvider(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: "Micro Grants",
  projectId: env.NEXT_PUBLIC_PROJECT_ID || "YOUR_PROJECT_ID",
  chains,
});

export const wagmiConfigData = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export const chainData = chains;

export const getChain = (chainId: number) => {
  for (const chain of Object.values(chains)) {
    if (chain.id === chainId) {
      return chain;
    }
  }

  throw new Error(`Chain with id ${chainId} not found`);
};
