import express, { application } from 'express';
import router from './router';

class App {
  public express = application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.express.use(router);
  }

  middlewares() {
    this.express.use(express.json());
  }
}

export default new App().express;
