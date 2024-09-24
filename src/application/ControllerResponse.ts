export interface ControllerResponse<T = void> {
  status: number;
  payload?: T | unknown;
}
