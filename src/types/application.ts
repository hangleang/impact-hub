import type { TAllocatedData, TDistributedData } from "./pool";

export type ApplicationStatus = "Accepted" | "Rejected" | "Pending" | "Paid";

export type TApplicationMetadata = {
  name: string;
  website: string;
  description: string;
  email: string;
  base64Image: string;
};

export type TNewApplication = TApplicationMetadata & {
  requestedAmount: bigint;
  recipientAddress: `0x${string}`;
  profileId?: `0x${string}`;
  profileName?: string;
};

export type TNewApplicationResponse = {
  blockTimestamp: string;
  isUsingRegistryAnchor: boolean;
  metadataPointer: string;
  recipientAddress: `0x${string}`;
  recipientId: `0x${string}`;
  requestedAmount: string;
  status: ApplicationStatus;
  metadata?: TApplicationMetadata;
  applicationBanner?: string;
};

export type TApplicationData = {
  microGrant: {
    chainId: string;
    poolId: string;
    allocationStartTime: number;
    allocationEndTime: number;
    maxRequestedAmount: string;
    blockTimestamp: string;
    pool: {
      strategy: string;
      tokenMetadata: {
        name?: string;
        symbol?: string;
        decimals?: number;
      };
      token: `0x${string}`;
      amount: string;
    };
    allocateds: TAllocatedData[];
    distributeds: TDistributedData[];
  };
  sender: string;
  recipientId: string;
  recipientAddress: string;
  requestedAmount: string;
  metadataPointer: string;
  blockTimestamp: string;
  isUsingRegistryAnchor: boolean;
  status: string;
};
