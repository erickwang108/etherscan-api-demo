require('dotenv').config();
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from 'express';

import apiRouters from 'routes/index';
import { CustomError, HttpStatusCodes } from './utils/errors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
  // TODO: add more security configs
}

app.use('/api', apiRouters);

app.get('*', (req, res) => res.status(404).send('Api Not found 404'));

// Error handling
app.use((err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
  console.log(err);
  const status = err instanceof CustomError ? err.httpStatus : HttpStatusCodes.BAD_REQUEST;
  return res.status(status).json({
    error: err.message,
  });
});

export default app;
