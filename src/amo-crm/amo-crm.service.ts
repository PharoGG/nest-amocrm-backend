import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AmoCrmService {
  private accessToken: string = '';
  private baseDomain: string = '';

  async getToken(): Promise<string> {
    if (this.accessToken) {
      return this.accessToken;
    }

    const clientId = '31550986';
    const url = 'https://test.gnzs.ru/oauth/get-token.php';
    const headers = {
      'X-Client-Id': clientId,
    };

    try {
      const response = await axios.get(url, { headers });
      this.accessToken = response.data.access_token;
      this.baseDomain = response.data.base_domain;
      return this.accessToken;
    } catch (error) {
      console.error('Failed to retrieve access token:', error.message);
      throw error;
    }
  }
}
