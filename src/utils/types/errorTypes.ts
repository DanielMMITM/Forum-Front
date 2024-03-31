export interface CustomError {
  code: number;
  status: string;
  message: string | null;
  debugMessage: string | null;
  stack: SubError[] | null;
}

interface SubError {
  object: string;
  field: string;
  rejectedValue: Object;
  message: string;
}

export interface CustomAxiosError {
  response: {
    data: CustomError;
  };
}
