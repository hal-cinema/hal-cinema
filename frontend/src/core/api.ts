import { Movie } from '@/types/movies';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Response } from "@/types/response";

class BaseApiClient {
    private static readonly baseUrl = "/api/v1/";
    private static async sendRequest<T>(config: AxiosRequestConfig): Promise<Response<T>> {
        const response: AxiosResponse<Response<T>> = await axios(config);
        return response.data;
    }

    public static async get<T>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> {
        const requestConfig: AxiosRequestConfig = {
            method: 'GET',
            url: `${this.baseUrl}${url}`,
            ...config,
        };

        return this.sendRequest<T>(requestConfig);
    }

    public static async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>> {
        const requestConfig: AxiosRequestConfig = {
            method: 'POST',
            url: `${this.baseUrl}${url}`,
            data,
            ...config,
        };

        return this.sendRequest<T>(requestConfig);
    }

    public static async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>> {
        const requestConfig: AxiosRequestConfig = {
            method: 'PUT',
            url: `${this.baseUrl}${url}`,
            data,
            ...config,
        };

        return this.sendRequest<T>(requestConfig);
    }

    public static async delete<T>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> {
        const requestConfig: AxiosRequestConfig = {
            method: 'DELETE',
            url: `${this.baseUrl}${url}`,
            ...config,
        };

        return this.sendRequest<T>(requestConfig);
    }
}

// TODO: Add more methods for other endpoints

class ApiClient extends BaseApiClient {
    public static async getMovies(): Promise<Response<Movie[]>> {
        return this.get<Movie[]>('movies');
    }
}

export default BaseApiClient;
