import { Controller, Get } from '@nestjs/common';
import { GuestsService } from './guests.service';


@Controller()
export class GuestsController {
  constructor(private readonly guestsService: GuestsService ) {}

  @Get()
  getHello(): string {
    return this.guestsService.getHello();
  }
}
