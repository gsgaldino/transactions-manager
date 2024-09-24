import axios from 'axios';
import { TransactionDatabase } from '../interfaces';
import { Transaction } from '../../entities';

export class TransactionDatabaseJsonServerAdapter
  implements TransactionDatabase
{
  private baseUrl: string;
  constructor() {
    this.baseUrl = 'http://localhost:8080';
  }

  async findAll(): Promise<Transaction[]> {
    const resposne = await axios.get(`${this.baseUrl}/transactions`);
    const output = resposne.data;
    return output;
  }

  async save(transaction: Transaction): Promise<void> {
    await axios.post(`${this.baseUrl}/transactions`, {
      ...transaction,
    });
  }
}
