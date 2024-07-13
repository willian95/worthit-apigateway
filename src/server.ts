import express from 'express'
import bodyParser from 'body-parser';
import { Request, Response } from "express";
import { authRouter } from './infrastructure/auth/auth.router';

const app = express()
app.use(bodyParser.json())
app.use("/auth-service", authRouter)

app.get('/', (req: Request, res:Response) => {
    res.send('Hello from API Gateway 6')
})

app.listen(5000, () => {
    console.log('API Gateway is running on port 5000')
})
