import { Router } from 'express';
import { createTransactionController } from './application/Transaction/CreateTransaction';
import { getTransactionController } from './application/Transaction/GetTransactions';
import { getTransactionsController } from './application/Reports/GetTransactions';

const router = Router();

router.post('/transactions', async (req, res) => {
  const output = await createTransactionController.execute(req.body);
  res.status(output.status).json(output.payload);
});

router.get('/transactions', async (req, res) => {
  const output = await getTransactionController.execute();
  res.status(output.status).json(output.payload);
});

router.get('/report', async (req, res) => {
  const output = await getTransactionsController.execute();
  res.status(output.status).json(output.payload);
});

export default router;
