import { Router } from 'express';
import { isPending, resolveCall } from '../utils.js';

const router = Router();

router.post('/webhook/:id', async (req, res) => {
  const { id } = req.params;
  if (!isPending(id)) return res.sendStatus(404);
  resolveCall(id, req.body);
  res.sendStatus(200);
});

export { router as webhookRouter };
