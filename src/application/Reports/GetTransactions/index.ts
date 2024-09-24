import { GetTransactionsController } from './GetTransactionsController';
import { GetTransactionsUseCase } from './GetTransactionsUseCase';
import { PayableDatabaseJsonServerAdapter } from '../../../infra/adapters';

const payableDatabase = new PayableDatabaseJsonServerAdapter();
const getTransactionsUseCase = new GetTransactionsUseCase(payableDatabase);
const getTransactionsController = new GetTransactionsController(
  getTransactionsUseCase
);

export { getTransactionsController };
