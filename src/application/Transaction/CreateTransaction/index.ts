import { CreateTransactionController } from './CreateTransactionController';
import { CreateTransactionUseCase } from './CreateTransactionUseCase';
import {
  TransactionDatabaseJsonServerAdapter,
  PayableDatabaseJsonServerAdapter,
} from '../../../infra/adapters';

const payableDatabase = new PayableDatabaseJsonServerAdapter();
const transactionDatabase = new TransactionDatabaseJsonServerAdapter();
const createTransactionUseCase = new CreateTransactionUseCase(
  transactionDatabase,
  payableDatabase
);
const createTransactionController = new CreateTransactionController(
  createTransactionUseCase
);

export { createTransactionController };
