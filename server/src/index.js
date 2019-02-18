import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { connect } from './utils/db'
import userRouter from './resources/user/router'
import itemRouter from './resources/item/router'
import listRouter from './resources/list/router'

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

export const start = async () => {
  try {
    await connect();
    app.listen(config.app.port, () => {
      console.log(`REST API on http://localhost:${config.app.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
};