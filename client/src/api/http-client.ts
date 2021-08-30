/**
 * Returns an instance of Axios HTTP client with intercepted requests
 */
import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import logger from '../logger';
import {HttpError} from './types';
import {Header} from "./confg";

const httpClient = axios.create({
    headers: {
        [Header.ContentType]: 'application/json',
        [Header.Accept]: '*/*',
        [Header.AccessControl]:'Accept'
    }
});

const onRequest = (request: AxiosRequestConfig) => {
    const {method, url, data} = request;

    console.log(request)

    logger.info(`--> ${method?.toUpperCase()} ${url} ${data ? `Body: ${JSON.stringify(data)}` : ''}`);

    return request;
};

const onResponse = <T>(response: AxiosResponse<T>) => {
    const {status, config} = response;

    logger.info(`<-- ${status} ${config.url}`);

    return response;
};

const onError = (error: AxiosError) => {
    const {message, response, config} = error;

    if (response) {
        logger.error(`<-- ${response.status} ${config.url} Body: ${JSON.stringify(response.data)}`);

        throw new HttpError(message, response.status, response.headers, response.data);
    }

    throw error;
};

httpClient.interceptors.request.use((request) => onRequest(request));
httpClient.interceptors.response.use(
    (response) => onResponse(response),
    (error) => onError(error)
);

export default httpClient;
