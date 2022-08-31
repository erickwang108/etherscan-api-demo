export type Transaction = {
  txHash: string;
  method: string;
  blockNumber: number;
  displayTime: string;
  time: string;
  from: string;
  to: string;
  value: number;
  txFee: number;
};

export type ParseResult = { list: Transaction[]; totalPage: number };

export enum ResponseCode {
  OK = 1000,
  ERROR_INTERNAL = 2000,
  ERROR_INVALID_PARAMS = 2001,
}

export type ResponseResult = { error?: any; data?: any; code: ResponseCode };
