import { Payable } from '../../entities';
import { PayableDatabase } from '../interfaces';
import axios from 'axios';

export class PayableDatabaseJsonServerAdapter implements PayableDatabase {
  public baseUrl: string;
  constructor() {
    this.baseUrl = 'http://localhost:8080';
  }

  async findAll(): Promise<Payable[]> {
    const response = await axios.get(`${this.baseUrl}/payables`);
    const output = response.data;
    return output;
  }

  async save(payable: Payable): Promise<void> {
    await axios.post(`${this.baseUrl}/payables`, {
      ...payable,
    });
  }
}
