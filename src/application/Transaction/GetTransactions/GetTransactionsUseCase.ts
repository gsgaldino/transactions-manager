import { TransactionDatabase } from '../../../infra/interfaces';

export class GetTransactionsUseCase {
  constructor(private readonly transactionDatabase: TransactionDatabase) {}

  async execute() {
    const transactions = await this.transactionDatabase.findAll();
    return transactions;
  }
}
