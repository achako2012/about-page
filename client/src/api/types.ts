export class HttpError extends Error {
    private body: unknown;

    private headers: unknown;

    private statusCode: unknown;

    constructor(message: string, statusCode: number, headers: unknown, body: unknown) {
        super(`Http request failed. Details: ${JSON.stringify({message, statusCode, headers, body}, null, 2)}`);

        this.body = body;
        this.headers = headers;
        this.statusCode = statusCode;

        Object.setPrototypeOf(this, HttpError.prototype);
    }

}