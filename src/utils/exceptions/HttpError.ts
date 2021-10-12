class HttpError extends Error {
    public statusCode: number
    constructor(message: string) {
        super(message)
        this.statusCode = 500
        this.name = 'Http Error'
    }
}

export default HttpError