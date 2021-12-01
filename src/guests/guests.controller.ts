import { ValidationPipe } from './../pipe/validation.pipe';
import { Body, Controller, Get, Post, Render, Res, Response } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { CreateGuestDto } from './dto/create-guest.dto';


@Controller()
export class GuestsController {
  constructor(private readonly guestsService: GuestsService ) {}

  @Get()
  @Render('index')
  index(@Res() res: Response) {
    return { message: 'Hello world!' };
  }

  @Post()
  async create(
      @Body(new ValidationPipe()) createGuestDto: CreateGuestDto
  ) {
    this.guestsService.create(createGuestDto);
  }
}
