import { Router } from 'express';
import { callService } from '../utils.js';

const router = Router();

router.post('/client/:id', async (req, res) => {
  const { id } = req.params;
  const result = await callService(id);
  res.status(201).json(result);
});

export { router as clientRouter };
