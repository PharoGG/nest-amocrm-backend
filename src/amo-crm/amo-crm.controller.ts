import { Controller, Get } from '@nestjs/common';
import { AmoCrmService } from './amo-crm.service';

@Controller('amo-crm')
export class AmoCrmController {
  constructor(private readonly amoCrmService: AmoCrmService) {}

  @Get('token')
  async getToken(): Promise<string> {
    try {
      const accessToken = await this.amoCrmService.getToken();
      return accessToken;
    } catch (error) {
      return error.message;
    }
  }
}
