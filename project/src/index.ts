require('dotenv').config();
import express from 'express';
import {json} from 'body-parser';
import {baseRouter} from './routes/record.routes';
import mongoose from 'mongoose';
const swaggerUi = require('swagger-ui-express');
const basicAuth = require('express-basic-auth');

const port = process.env.NODE_PORT || 3000;

const app = express();
app.use(json());

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Base Project',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/**.routes.ts'],
};

const swaggerPassword = process.env.SWG_PASSWORD;

const swaggerSpec = swaggerJsdoc(options);
app.use(
  '/api-docs',
  basicAuth({
    users: {users: swaggerPassword},
    challenge: true,
  }),
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use(baseRouter);

mongoose.connect(process.env.DB_HOST ? process.env.DB_HOST : '', err => {
  if (err) throw err;
  console.info('Connected to DB.');
});

app.listen(port, () => {
  console.info(`Server is listening on port: ${port}.`);
});
