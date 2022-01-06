import express from "express";
import {json } from "body-parser";
import { baseRouter } from "./routes/base.routes";
import mongoose from "mongoose";

const app = express();
app.use(json());
app.use(baseRouter);

mongoose.connect("mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true",
()=> {
    console.info("Connected to Getir database.")
})

const PORT = 3000;

app.listen(PORT, () => {
    console.info(`Server is listening on port: ${PORT}.`)
});
