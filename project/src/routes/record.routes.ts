import express from 'express';
import {validateRecordRequest} from '../requests/record.requests';
import {findRecords} from '../services/record.service';
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
 *         description: Returns the Records.
 */
router.get('/api/base', validateRecordRequest, findRecords);

export {router as baseRouter};
