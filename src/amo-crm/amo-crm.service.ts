import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AmoCrmService {
  constructor(private httpService: HttpService) {}

  async createLead(data: any) {
    try {
      // Берем токен
      const { access_token } = await this.getTokenAndDomain();

      // Отправляем POST запрос для создания сделки
      const response = await this.httpService
        .post(`/leads`, data, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .toPromise();

      // Извлекаем Id из ответа
      const leadId = response.data?._embedded?.leads?.[0]?.id;

      if (!leadId) {
        throw new Error('Lead ID not found in response');
      }

      // Возвращаем объект с айди и статус кодом
      return { id: leadId, statusCode: response.status };
    } catch (error) {
      // Если произошла ошибка, возвращаем объект с текстом ошибки и статус кодом
      return {
        error: error.message,
        statusCode: error.response?.status || 500,
      };
    }
  }

  async createContact(data: any) {
    try {
      // Получаем токен
      const { access_token } = await this.getTokenAndDomain();

      // Отправляем POST запрос для создания контакта
      const response = await this.httpService
        .post(`/contacts`, data, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .toPromise();

      // Извлекаем id из ответа
      const contactId = response.data?._embedded?.contacts?.[0]?.id;

      if (!contactId) {
        throw new Error('Contact ID not found in response');
      }

      // Возвращаем айди и статус
      return { id: contactId, statusCode: response.status };
    } catch (error) {
      // Текст ошибки и статус
      return {
        error: error.message,
        statusCode: error.response?.status || 500,
      };
    }
  }

  async createCompany(data: any) {
    try {
      // Получаем токен
      const { access_token } = await this.getTokenAndDomain();

      // Отправляем POST запрос для создания компании
      const response = await this.httpService
        .post(`/companies`, data, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .toPromise();

      // Извлекаем айди из ответа
      const companyId = response.data?._embedded?.companies?.[0]?.id;

      if (!companyId) {
        throw new Error('Company ID not found in response');
      }

      // Возвращаем объект с id и статус кодом
      return { id: companyId, statusCode: response.status };
    } catch (error) {
      // Если произошла ошибка, возвращаем объект с текстом ошибки и статус кодом
      return {
        error: error.message,
        statusCode: error.response?.status || 500,
      };
    }
  }

  async getTokenAndDomain() {
    try {
      // Получаем токен
      const response = await this.httpService
        .get('https://test.gnzs.ru/oauth/get-token.php', {
          headers: {
            'X-Client-Id': '31550986',
          },
        })
        .toPromise();

      return response.data;
    } catch (error) {
      throw new Error(`Failed to get token and domain: ${error.message}`);
    }
  }
}
