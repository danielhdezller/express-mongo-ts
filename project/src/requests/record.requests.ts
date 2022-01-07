import {NextFunction, Request, Response} from 'express';
import {toBadRequestResponse} from '../responses/record.response';
import {isValidDate} from '../utils/validate-dates.util';

/**
 * Functions that validate the request to get the records.
 * @export
 * @param {Request} req Express Request Param.
 * @param {Response} res Express Response Param.
 * @param {NextFunction} next Express Next Function Param.
 * @return {*}
 */
export function validateRecordRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  if (!isValidDate(data.startDate) || !isValidDate(data.endDate)) {
    return res
      .status(400)
      .send(
        toBadRequestResponse('Bad-Request, date format must be YYYY-MM-DD.')
      );
  }
  if (typeof data.minCount !== 'number' || typeof data.maxCount !== 'number') {
    return res
      .status(400)
      .send(
        toBadRequestResponse(
          'Bad-Request, minCount and maxCount must be numbers.'
        )
      );
  }
  return next();
}
