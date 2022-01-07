import {IRecord, IResponseDto} from '../interfaces/IResponse';

/**
 * Function that transform the response as a OK custom response..
 * with a custom message.
 * @export
 * @param {IRecord[]} records Records to add to the response.
 * @return {*}  {IResponseDto}
 */
export function toOkResponse(records: IRecord[]): IResponseDto {
  return {
    code: 0,
    msg: 'success',
    records: records,
  };
}

/**
 * Function that transform the response as custom BadRequest
 * with a custom message.
 * @export
 * @param {string} msg The message.
 * @return {*}  {IResponseDto}
 */
export function toBadRequestResponse(msg: string): IResponseDto {
  return {
    code: 400,
    msg: msg,
    records: [],
  };
}
