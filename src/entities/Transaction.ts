export type MethodType = 'credit_card' | 'debit_card';

export class Transaction {
  constructor(
    readonly value: string,
    readonly description: string,
    readonly method: MethodType,
    readonly cardNumber: string,
    readonly cardHolderName: string,
    readonly cardExpirationDate: string,
    readonly cardCvv: string,
    readonly id?: string
  ) {}
}
