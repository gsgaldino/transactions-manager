import { PayableDatabase } from '../../../infra/interfaces';

export class GetTransactionsUseCase {
  constructor(private readonly payableDatabse: PayableDatabase) {}

  async execute() {
    const payables = await this.payableDatabse.findAll();
    let totalPaid = 0;
    let totalTaxes = 0;
    let toReceive = 0;
    payables.forEach((payable) => {
      if (payable.status === 'paid') {
        totalPaid += Number.parseFloat(payable.total);
        totalTaxes += Number.parseFloat(payable.discount);
      } else {
        toReceive += Number.parseFloat(payable.total);
      }
    });
    return { totalPaid, totalTaxes, toReceive };
  }
}
