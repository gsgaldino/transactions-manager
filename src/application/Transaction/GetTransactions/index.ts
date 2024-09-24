import { GetTransactionsController } from './GetTransactionsController';
import { GetTransactionsUseCase } from './GetTransactionsUseCase';
import { TransactionDatabaseJsonServerAdapter } from '../../../infra/adapters';

const transactionDatabase = new TransactionDatabaseJsonServerAdapter();
const getTransactionsUseCase = new GetTransactionsUseCase(transactionDatabase);
const getTransactionController = new GetTransactionsController(
  getTransactionsUseCase
);

export { getTransactionController };
