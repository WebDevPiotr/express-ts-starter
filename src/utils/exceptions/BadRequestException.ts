import HttpError from "./HttpError"

class BadRequestException extends HttpError {
    constructor(message: string) {
        super(message)
        this.name = "Bad request"
        this.statusCode = 400
    }
}

export default BadRequestException