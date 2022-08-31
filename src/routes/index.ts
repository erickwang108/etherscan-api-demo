import { Router } from 'express';
import txsRouter from './txsRouter';

const apiRouter = Router();

apiRouter.use('/txs', txsRouter);

export default apiRouter;
