import type { StrategyType } from "@allo-team/allo-v2-sdk/dist/strategies/MicroGrantsStrategy/types";
import type { ApplicationStatus } from "./application";

export type TStrategyType = keyof typeof StrategyType;

export type TMicroGrantRecipient = {
  recipientId: `0x${string}`;
  recipientAddress: `0x${string}`;
  requestedAmount: string;
  metadataPointer: string;
  blockTimestamp: string;
  isUsingRegistryAnchor: boolean;
  status: ApplicationStatus;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata?: any;
  applicationBanner?: string;
};
