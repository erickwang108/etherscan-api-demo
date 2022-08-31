import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  timeout: 10000,
  maxRedirects: 5,
});

export const request = async <T>(options: AxiosRequestConfig) => {
  const axiosResponse: AxiosResponse<T> = await axiosInstance({
    method: 'GET',
    ...options,
  });
  return axiosResponse?.data;
};

export const getHtmlContent = async (url: string, params?: any) =>
  request<string>({ url, responseType: 'text', params });
