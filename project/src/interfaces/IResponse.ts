export interface IRecord {
  key: string;
  createdAt: Date;
  totalCount: number;
}
export interface IResponseDto {
  code: number;
  msg: string;
  records: IRecord[];
}
