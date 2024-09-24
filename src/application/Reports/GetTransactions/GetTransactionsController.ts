import { GetTransactionsUseCase } from './GetTransactionsUseCase';
import { ControllerResponse } from '../../ControllerResponse';

export class GetTransactionsController {
  constructor(
    private readonly getTransactionsUseCase: GetTransactionsUseCase
  ) {}

  async execute(): Promise<ControllerResponse> {
    const output = await this.getTransactionsUseCase.execute();
    return { status: 200, payload: output };
  }
}
