import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AmoCrmController } from './amo-crm.controller';
import { AmoCrmService } from './amo-crm.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://rmxtfurm45mw01.amocrm.ru/api/v4',
    }),
  ],
  controllers: [AmoCrmController],
  providers: [AmoCrmService],
})
export class AmoCrmModule {}
