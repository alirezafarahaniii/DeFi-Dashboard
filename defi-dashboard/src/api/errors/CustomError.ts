
import { ErrorResponse } from '@/api/errors/ErrorResponse ';

export class CustomError extends Error {
  public status: number;

  constructor(errorResponse: ErrorResponse) {
    super(errorResponse.message);
    this.status = errorResponse.status;
  }
}
