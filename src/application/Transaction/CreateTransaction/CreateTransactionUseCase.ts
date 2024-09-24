import {
  PayableDatabase,
  TransactionDatabase,
} from '../../../infra/interfaces';
import { Transaction, Payable } from '../../../entities';

export class CreateTransactionUseCase {
  constructor(
    private readonly transactionDatabase: TransactionDatabase,
    private readonly payableDatabase: PayableDatabase
  ) {}

  async execute(body: any) {
    const transaction = new Transaction(
      body.value,
      body.description,
      body.method,
      body.cardNumber,
      body.cardHolderName,
      body.cardExpirationDate,
      body.cardCvv
    );
    const payable = new Payable(
      transaction.value,
      transaction.method,
      transaction.id
    );
    await Promise.all([
      this.transactionDatabase.save(transaction),
      this.payableDatabase.save(payable),
    ]);
  }
}
