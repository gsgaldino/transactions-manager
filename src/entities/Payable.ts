import { MethodType } from './Transaction';

type Status = 'waiting_funds' | 'paid';

export class Payable {
  public createDate: string;
  public discount: string;
  public total: string;
  public status: Status;

  constructor(
    readonly subtotal: string,
    readonly method: MethodType,
    readonly id?: string
  ) {
    if (!method) throw new Error('Método não informado');
    const isCreditCard = method === 'credit_card';
    const discountPercentage = isCreditCard ? 0.04 : 0.02;
    this.discount = String(
      (Number.parseFloat(subtotal) * discountPercentage).toFixed(2)
    );
    this.status = isCreditCard ? 'waiting_funds' : 'paid';
    const now = new Date();
    const creationDate = isCreditCard
      ? new Date(now.setDate(now.getDate() + 30))
      : now;
    this.createDate = creationDate.toLocaleDateString();
    this.total = (
      Number.parseFloat(subtotal) - Number.parseFloat(this.discount)
    ).toFixed(2);
  }
}
