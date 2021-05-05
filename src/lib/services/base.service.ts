import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ApiResponse } from 'types/api';

export class BaseApiService {
  protected instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BASE_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  protected post<T = any>(
    url: string,
    data,
    options?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this.instance.post(this.formatUrl(url), data, options);
  }

  protected get<T = any>(
    url: string,
    options?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this.instance.get(this.formatUrl(url), options);
  }

  protected put<T = any>(
    url: string,
    data,
    options?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this.instance.put(this.formatUrl(url), data, options);
  }

  protected delete<T = any>(
    url: string,
    options?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this.instance.delete(this.formatUrl(url), options);
  }

  protected formatUrl(url: string) {
    return url;
  }
}
