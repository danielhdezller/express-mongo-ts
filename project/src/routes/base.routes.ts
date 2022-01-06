import  express, {Request, Response}  from "express";

const router = express.Router();

router.get("/api/base", [],  (req: Request, res: Response) => {
    return res.send("The base.")
});

export { router as baseRouter };
