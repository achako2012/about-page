import { AxiosInstance } from 'axios';
import httpClient from '../http-client';
import { BASE_URL } from '../confg';

type HttpClient = AxiosInstance;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StaticThis<T> = { new (...args: any[]): T };

abstract class AboutService {
    protected readonly httpClient: HttpClient;

    protected readonly baseUrl: string;

    constructor(httpInstance: AxiosInstance) {
        this.httpClient = httpInstance;
        this.baseUrl = BASE_URL;
    }

    static create<T extends AboutService>(this: StaticThis<T>): T {
        return new this(httpClient);
    }
}

export default AboutService;
