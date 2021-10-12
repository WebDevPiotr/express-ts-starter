import express, { json, NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

import errorHandler from './utils/errorHandler/errorHandler'

const port = process.env.PORT || 8080;
const app = express()

app.use(helmet())
app.use(cors({ origin: "*" }))
app.use(json())
app.use(
    morgan(
        ':date[clf] - method: :method, endpoint: :url, status: :status, size: :res[content-length] - :response-time ms',
        { skip: () => process.env.NODE_ENV === 'test' }
    )
)


app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    res.send("TEST")
})

app.use(errorHandler)

app.listen(port, () => console.log(`App listening on port: ${port}`));