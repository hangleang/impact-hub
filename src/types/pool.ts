import type { TMicroGrantRecipient, TStrategyType } from "./strategy";

export enum TPoolType {
  UPCOMING = "upcoming",
  ACTIVE = "active",
  ENDED = "ended",
}

export type TPool = {
  id: number;
  name: string;
  chainId: number;
  dates: {
    start: string;
    end: string;
  };
  strategy: `0x${string}`; // address of the strategy contract
  amount: number;
  tokenSymbol: string;
  active: boolean;
};

export type TPoolMetadata = {
  profileId: `0x${string}`;
  name: string;
  website: string;
  description: string;
  base64Image?: string;
};

export type TNewPool = TPoolMetadata & {
  // chain info
  tokenAddress: `0x${string}`;
  fundPoolAmount: string;
  maxAmount: string;
  managers: `0x${string}`[];
  startDate: string;
  endDate: string;
  approvalThreshold: number;
  useRegistryAnchor: boolean;
  profileName?: string;
  strategyType: TStrategyType;
  // Hat
  hatId?: number;
  // Gov
  gov?: string;
  minVotePower?: string;
  snapshotReference?: string;
};

export type TNewPoolResponse = {
  address: `0x${string}`;
  poolId: number;
};

export type TAllocatedData = {
  recipientId: `0x${string}`;
  recipientAddress: `0x${string}`;
  sender: `0x${string}`;
  contractAddress: `0x${string}`;
  contractName: string;
  chainId: string;
  blockTimestamp: string;
  status: string;
  transactionHash: string;
};

export type TDistributedData = {
  recipientId: `0x${string}`;
  recipientAddress: `0x${string}`;
  sender: `0x${string}`;
  contractAddress: `0x${string}`;
  contractName: string;
  chainId: string;
  amount: string;
  blockTimestamp: string;
  transactionHash: string;
};

export type TPoolData = {
  poolId: string;
  chainId: string;
  strategy: string;
  allocationStartTime: number;
  allocationEndTime: number;
  approvalThreshold: number;
  maxRequestedAmount: string;
  blockTimestamp: string;
  useRegistryAnchor: boolean;
  pool: {
    strategy: string;
    strategyName: string;
    tokenMetadata: {
      name?: string;
      symbol?: string;
      decimals?: number;
    };
    token: `0x${string}`;
    amount: string;
    metadataPointer: string;
    poolBanner: string;
    metadata: TPoolMetadata;
    profile: {
      profileId: `0x${string}`;
      name: string;
    };
  };
  allocateds: TAllocatedData[];
  distributeds: TDistributedData[];
  microGrantRecipients: TMicroGrantRecipient[];
  strategyType: TStrategyType;
  // Hat
  hatId?: number;
  // Gov
  gov?: string;
  minVotePower?: string;
  snapshotReference?: string;
};
