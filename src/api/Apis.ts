import axios, {AxiosInstance, AxiosResponse} from 'axios';

import {AxiosErrorHandler} from '../utils/helpers/axiosHelper';

axios.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  AxiosErrorHandler,
);

export const usersApiAxios: AxiosInstance = axios.create({
  baseURL: 'https://gist.githubusercontent.com/Gualberto-Vannini/',
});

const APIS: AxiosInstance[] = [axios, usersApiAxios];

APIS.forEach(api =>
  api.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    AxiosErrorHandler,
  ),
);

axios.defaults.headers.common.accept = 'application/json';
