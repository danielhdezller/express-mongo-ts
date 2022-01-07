import express, {Request, Response} from 'express';
import {Base, IRequestRecords} from '../models/base.model';
import {validateRecordRequest} from '../requests/record.requests';
import {findRecords} from '../services/record.service';
import {isValidDate} from '../utils/validate-dates.util';
const router = express.Router();

/**
 * @openapi
 * /api/base:
 *   get:
 *     description: Get the Records.
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              startDate:
 *                type: string
 *                example: 2012-02-23
 *              endDate:
 *                example: 2013-02-23
 *                type: string
 *              minCount:
 *                example: 200
 *                type: integer
 *              maxCount:
 *                example: 1000
 *                type: integer
 *     responses:
 *       200:
 *         description: returns string.
 *         content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              startDate:
 *                type: string
 *                example: 2012-02-23
 *
 */
router.get('/api/base', validateRecordRequest, findRecords);

/**
 * @openapi
 * /api/base:
 *   post:
 *     description: Create a register.
 *     responses:
 *       201:
 *         description: Returns the registry.
 */
router.post(
  '/api/base',
  (req, res, next) => {
    const data = req.body;
    if (!isValidDate(data.startDate) || !isValidDate(data.endDate)) {
      return res
        .status(400)
        .send('Bad Request, date format must be YYYY-MM-DD');
    }
    return next();
  },

  async (req: Request, res: Response): Promise<Response> => {
    const baseDto: IRequestRecords = req.body;
    const base = new Base({
      startDate: baseDto.startDate,
      endDate: baseDto.endDate,
      minCount: baseDto.minCount,
      maxCount: baseDto.maxCount,
    });
    try {
      await base.save();
    } catch (err) {
      console.error(err);
    }

    return res.status(201).send(base);
  }
);

export {router as baseRouter};
