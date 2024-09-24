import { Payable } from '../../entities';

export interface PayableDatabase {
  save(payable: Payable): Promise<void>;
  findAll(): Promise<Payable[]>;
}
