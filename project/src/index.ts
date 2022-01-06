import express from "express";
import {json } from "body-parser";
import { baseRouter } from "./routes/base.routes";

const app = express();
app.use(json());
app.use(baseRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.info(`Server is listening on port: ${PORT}.`)
});
