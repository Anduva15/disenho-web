import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import * as routes from './routes/index.js';


//----------------------------------------------------------------
const express = require('express');
const app = express();

//Manejo de error 404
app.use((req, res, next) =>  {
  res.status(404).send('Error 404, page not found')
  //Se debe llamar al HTML Page-not-found
});

//Manejo de error 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error 500, internal server error')
  //Se debe llamar al HTML Internal-server-error
})
//----------------------------------------------------------------


const port = 8085;

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
