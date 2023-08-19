import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import * as routes from './routes/index.js';



const port = 8085;
mongoose.set('strictQuery', false);
const start = () => {
  try {
    mongoose.connect('mongodb://localhost:27017/restaurante').then(() => {
      const app = express();
      app.use(cors());
      app.use(express.json());
      Object.keys(routes).forEach(routeKey => {
        app.use(routes[routeKey]);
      });
      app.listen(port, () =>
        console.log(`Server is running on localhost:${port}`)
      );
    });
  } catch (error) {
    console.error(error);
  }
};



start();
