import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [GuestsController],
  providers: [GuestsService],
  exports: [GuestsService]
})
export class GuestsModule {}
