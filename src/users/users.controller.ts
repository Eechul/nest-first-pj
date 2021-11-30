import { UsersService } from './users.service';
import { User } from './user.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';


@Controller("users")
export class UsersController {
  
  constructor(
    private usersService: UsersService
  ) {}

  @Get()
  getHello(): string {
    this.usersService.create(new CreateUserDto())
    return "hellow~!";
  }


}
