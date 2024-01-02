export * from "./abi";
export * from "./application";
export * from "./pool";
export * from "./profile";
export * from "./strategy";

export enum ETarget {
  NONE = "None",
  IPFS = "IPFS",
  CHAIN = "Blockchain",
  SPEC = "Spec",
  POOL = "Pool",
  ALLO = "Allo",
}

export enum EProgressStatus {
  IS_SUCCESS = "IS_SUCCESS",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  IS_ERROR = "IS_ERROR",
}

export type TProgressStep = {
  id?: string;
  content: string;
  target?: string;
  href?: string;
  status: EProgressStatus;
};

export enum EPoolStatus {
  UPCOMING = "Upcoming",
  ACTIVE = "Active",
  ENDED = "Ended",
}
