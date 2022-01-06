import express from "express";
import {json } from "body-parser";

const app = express()
app.use(json())

const PORT = 3000;

app.listen(PORT, () => {
    console.info(`Server is listening on port: ${PORT}.`)
})