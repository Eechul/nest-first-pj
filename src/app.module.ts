import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { GuestsModule } from './guests/guests.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    UsersModule,
    GuestsModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '***',
      port: 3306,
      username: 'admin',
      password: '***',
      database: '***',
      entities: [User],
      synchronize: true,
    })
  ]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
