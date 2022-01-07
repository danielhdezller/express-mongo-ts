import {NextFunction, Request, Response} from 'express';

/**
 * Helper function to handle the internal error.
 * @export
 * @param {Error} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function clientErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.xhr) {
    res.status(500).send({error: 'Something failed!'});
  } else {
    next(err);
  }
}
