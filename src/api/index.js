import { Router } from 'express';

import { clientRouter } from './client.js';
import { webhookRouter } from './webhook.js';

const api = Router();

api.use(clientRouter);
api.use(webhookRouter);

export { api };
