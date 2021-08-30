import {AxiosInstance} from "axios";
import {BASE_URL} from "../config";
import httpClient from "../http-clent";

type HttpClient = AxiosInstance;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StaticThis<T> = { new(...args: any[]): T };

abstract class AboutService {

    protected readonly httpClient: HttpClient;

    protected readonly baseUrl: string

    constructor(httpClient: AxiosInstance) {
        this.httpClient = httpClient;
        this.baseUrl = BASE_URL;
    }

    static create<T>(this: StaticThis<T>): T {

        return new this(httpClient);

    }
}

export default AboutService