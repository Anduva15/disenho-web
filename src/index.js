import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import product from './routes/product.js';
import client from './routes/client.js';
import restaurant from './routes/restaurant.js';
import account from './routes/account.js'
import brand from './routes/brand.js'
import cashier from './routes/cashier.js'
import country from './routes/country.js'
import employee from './routes/employee.js'
import measurementUnit from './routes/measurmentUnit.js'
import position from './routes/position.js'
import provider from './routes/provider.js'
import report from './routes/report.js'
import reservation from './routes/reservation.js'
import role from './routes/role.js'
import table from './routes/table.js'
import user from './routes/user.js'


const port = 8085;

const start = () => {
  try {
    mongoose.connect('mongodb://localhost:27017/restaurante').then(() => {
      const app = express();
      app.use(cors());
      app.use(express.json());
      app.use(product);
      app.use(client);
      app.use(restaurant);
      app.use(account);
      app.use(brand);
      app.use(cashier);
      app.use(country);
      app.use(employee);
      app.use(measurementUnit);
      app.use(position);
      app.use(provider);
      app.use(report);
      app.use(reservation);
      app.use(role);
      app.use(table);
      app.use(user);
      app.listen(port, () =>
        console.log(`Server is running on localhost:${port}`)
      );
    });
  } catch (error) {
    console.error(error);
  }
};

start();
