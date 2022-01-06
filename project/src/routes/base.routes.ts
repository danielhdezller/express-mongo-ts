import  express, {Request, Response}  from "express";
import { Base, IBase } from "../models/base.model";

const router = express.Router();

/**
 * @openapi
 * /api/base:
 *   get:
 *     description: Get "The base.".
 *     responses:
 *       200:
 *         description: returns string.
 */
router.get("/api/base", [],  (req: Request, res: Response) => {
    return res.send("The base.")
});

/**
 * @openapi
 * /api/base:
 *   post:
 *     description: Create a register.
 *     responses:
 *       201:
 *         description: Returns the registry.
 */
router.post("/api/base", async  (req: Request, res: Response) => {
    const baseDto : IBase = req.body; 
    try {
        const base = new Base({
            startDate : baseDto.startDate,
            endDate: baseDto.endDate,
            minCount: baseDto.minCount,
            maxCount: baseDto.maxCount,
        });

        await base.save();
        return res.status(201).send(base);
    } catch (error) {
        console.error(error);
    }
});

export { router as baseRouter };
