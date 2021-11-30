import { GuestsModule } from './guests/guests.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [GuestsModule]
})
export class AppModule {}
