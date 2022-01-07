import {Request, Response} from 'express';
import {IRecord, IResponseDto} from '../interfaces/IResponse';
import {IRequestRecords} from '../models/base.model';
import {Records} from '../models/records.model';
import {toOkResponse} from '../responses/record.response';
import {toRecord} from '../utils/mappers/records.mapper';

/**
 * Functions to find records.
 * @export
 * @param {Request} req
 * @param {Response} res
 * @return {*}
 */
export async function findRecords(req: Request, res: Response) {
  const request: IRequestRecords = req.body;

  const startDate = request.startDate.split('-');
  const endDate = request.endDate.split('-');
  const data = await Records.find({
    createdAt: {
      $gte: new Date(+startDate[0], +startDate[1], +startDate[2]),
      $lt: new Date(+endDate[0], +endDate[1], +endDate[2]),
    },
  });

  const recordsArr: IRecord[] = [];

  for (let i = 0; i < data.length; i++) {
    const reducer = (previousValue: number, currentValue: number) =>
      previousValue + currentValue;

    const count = data[i].counts.reduce(reducer);

    if (count >= request.minCount && count <= request.maxCount) {
      const newRecord: IRecord = toRecord(data[i]);
      recordsArr.push(newRecord);
    }
  }

  const response: IResponseDto = toOkResponse(recordsArr);

  return res.send(response);
}
