import { Controller, Post, Body } from '@nestjs/common';
import { AmoCrmService } from './amo-crm.service';

@Controller('amo-crm')
export class AmoCrmController {
  constructor(private readonly amoCrmService: AmoCrmService) {}

  @Post('leads')
  async createLead(@Body() data: any) {
    return { id: await this.amoCrmService.createLead(data) };
  }

  @Post('contacts')
  async createContact(@Body() data: any) {
    return this.amoCrmService.createContact(data);
  }

  @Post('companies')
  async createCompany(@Body() data: any) {
    return this.amoCrmService.createCompany(data);
  }
}
