require('dotenv').config();
import express from "express";
import {json } from "body-parser";
import { baseRouter } from "./routes/base.routes";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;

const app = express();
app.use(json());
app.use(baseRouter);


mongoose.connect( process.env.DB_HOST ? process.env.DB_HOST : "", function(err) {
    if (err) throw err;
    console.info("Connected to DB.")
});

app.listen(port, () => {
    console.info(`Server is listening on port: ${port}.`)
});
