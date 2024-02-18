export class Reponse {
  private data: any;
  private statusCode: number;
  private message: string;
  private error: string;
  constructor(data: any, statusCode: number, message: string = 'success', error?: string) {
    this.data = data;
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
  }
}
