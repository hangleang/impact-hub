export type TProfile = {
  recipientId: `0x${string}`;
  recipientAddress: `0x${string}`;
  requestedAmount: string;
  metadataPointer: string;
  isUsingRegistryAnchor: boolean;
  status: string;
};

export type TProfilesByOwnerResponse = {
  profileId: string;
  name: string;
  owner: string;
  createdAt: string;
  anchor: string;
};

export type TProfileResponse = {
  profileId: string;
  nonce: number;
  name: string;
  metadataPointer: string;
  owner: string;
  anchor: string;
  creator: string;
  createdAt: string;
};
