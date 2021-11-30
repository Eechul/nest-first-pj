import { CreateGuestDto } from './dto/create-guest.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GuestsService {
  getHello(): string {
    return 'Hello World!';
  }

  create(dto: CreateGuestDto) {
      return 'dongchul';
  }
}
