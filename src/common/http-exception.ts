export default class ErrData extends Error {
    statusCode?: number;
    status?: boolean;
    message: string;
    error: string | null;

    constructor(statusCode: number, status: boolean, message: string, error?: string) {
        super(message);

        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
        this.error = error || null;
    }
}