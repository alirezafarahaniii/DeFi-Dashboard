import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { ref } from 'vue';

import { CryptoData } from '@/api/interfaces/CryptoData';
import { CustomError } from '@/api/errors/CustomError';

export class CoinMarketCapApiService {
  private api;

  constructor(apiKey: string, baseUrl: string) {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    } as AxiosRequestConfig); // Explicitly specify the type here
  }

  async getCryptocurrencies(limit: number = 20): Promise<CryptoData[]> {
    const response = ref<CryptoData[]>([]);
    try {
      const requestConfig: AxiosRequestConfig = {
        url: '/listings/latest',
        method: 'get',
        params: {
          limit,
        },
      };
      const axiosResponse: AxiosResponse<any> = await this.api(requestConfig);
      response.value = axiosResponse.data.data;
    } catch (error: any) {
      if (error.response) {
        const errorResponse = {
          status: error.response.status,
          message: error.response.data.status.error_message,
        };
        throw new CustomError(errorResponse);
      } else if (error.request) {
        console.error('No response received.');
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error;
    }
    return response.value;
  }
}
