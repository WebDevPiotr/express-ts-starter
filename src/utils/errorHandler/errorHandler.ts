import { NextFunction, Request, Response } from "express"
import HttpError from '../exceptions/HttpError'

export default function (error: HttpError, req: Request, res: Response, next: NextFunction) {
    const responseBody = {
        name: error.name || '',
        status: error.statusCode || 500,
        message: error.message || 'Internal server error',
    }

    res.status(responseBody.status).json(responseBody)
}