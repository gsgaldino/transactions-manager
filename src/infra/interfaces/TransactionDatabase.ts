import { Transaction } from '../../entities';

export interface TransactionDatabase {
  save(transaction: Transaction): Promise<void>;
  findAll(): Promise<Transaction[]>;
}
