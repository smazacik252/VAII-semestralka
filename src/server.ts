import express, { Request, Response } from 'express';
import pool from './db'
const port = 8000;
const app = express();

app.get('/', (req:any, res:any) => {
    res.sendStatus(200)
})

app.listen(port, () => console.log(`Listening on port ${port}`));

