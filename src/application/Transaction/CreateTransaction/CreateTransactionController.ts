import { ControllerResponse } from '../../ControllerResponse';
import { CreateTransactionUseCase } from './CreateTransactionUseCase';

export class CreateTransactionController {
  constructor(
    private readonly createTransactionUseCase: CreateTransactionUseCase
  ) {}

  async execute(body: any): Promise<ControllerResponse> {
    if (!body.method || !body.value) {
      return { status: 422, payload: 'Missing params' };
    }
    await this.createTransactionUseCase.execute(body);
    return { status: 200 };
  }
}
