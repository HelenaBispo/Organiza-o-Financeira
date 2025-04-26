import { useNavigation, NavigationProp } from '@react-navigation/native';
import axios, { AxiosResponse } from 'axios';

// Substitua 'localhost' pelo IP da sua máquina
const userToken = '';
const baseURL = `http://192.168.3.6:3333/finance-api`;

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken}`,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('Erro na requisição: ', error);

    const data = error.response?.data ?? { message: 'Erro na requisição' };

    const response: AxiosResponse<any, any> = {
      data: data,
      status: error.response?.status ?? 500,
      statusText: 'Erro na requisição',
      headers: {},
      config: error.config,
      request: error.request,
    };

    return Promise.reject(response);
  }
);
