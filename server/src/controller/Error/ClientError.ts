export class ClientError extends Error {
    public cause: string;
    
    constructor(message: string, error?: Error) {
        super(message);
        this.cause = error ? JSON.stringify(error, Object.getOwnPropertyNames(error)) : '';
    }
}

export default ClientError;