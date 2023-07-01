import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors'

import product from './routes/product.js';
import client from './routes/client.js';

const port = 8085;

const start = () => {
  try {
    mongoose
      .connect('mongodb://localhost:27017/restaurante')
      .then(() => {        
        const app = express();
        app.use(cors());
        app.use(express.json());
        app.use(product);
        app.use(client);
        app.listen(port, () => console.log(`Server is running on localhost:${port}`));
      });
  } catch (error) {
    console.error(error);
  }
};

start();