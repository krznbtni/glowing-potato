import { Router } from 'express';
import { sendCall } from '../utils.js';

const router = Router();

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await sendCall(id);
  res.status(201).json(result);
});

export { router as clientRouter };
