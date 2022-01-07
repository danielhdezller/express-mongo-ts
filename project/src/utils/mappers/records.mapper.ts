import {IRecord} from '../../interfaces/IResponse';
import {IRecordDb} from '../../models/records.model';

/**
 * Mapper to transform records thats comes from the db to records
 * required by the client.
 * @export
 * @param {IRecordDb} recordDB
 * @return {*}  {IRecord}
 */
export function toRecord(recordDB: IRecordDb): IRecord {
  return {
    key: recordDB.key,
    createdAt: recordDB.createdAt,
    totalCount: recordDB.counts.reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue
    ),
  };
}
