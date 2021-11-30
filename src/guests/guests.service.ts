import { Injectable } from '@nestjs/common';

@Injectable()
export class GuestsService {
  getHello(): string {
    return 'Hello World!';
  }
}
