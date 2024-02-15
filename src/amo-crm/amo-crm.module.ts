import { Module } from '@nestjs/common';
import { AmoCrmService } from './amo-crm.service';
import { AmoCrmController } from './amo-crm.controller';

@Module({
  providers: [AmoCrmService],
  controllers: [AmoCrmController],
})
export class AmoCrmModule {}
