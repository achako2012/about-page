export class HttpError extends Error {
    public body: unknown;

    public headers: unknown;

    public statusCode: number;

    constructor(message: string, statusCode: number, headers: unknown, body: unknown) {
        super(`Http request failed. Details: ${JSON.stringify({ message, statusCode, headers, body }, null, 2)}`);

        this.body = body;
        this.headers = headers;
        this.statusCode = statusCode;

        Object.setPrototypeOf(this, HttpError.prototype);
    }
}