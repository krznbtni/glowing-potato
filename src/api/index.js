import { Router } from 'express';

import { clientRouter } from './client.js';
import { webhookRouter } from './webhook.js';

const router = Router();

router.use('/client', clientRouter);
router.use('/webhook', webhookRouter);

export { router as apiRouter };
