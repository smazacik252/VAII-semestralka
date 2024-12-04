import "reflect-metadata";
import express, { Request, Response } from 'express';
import connection from './db';
import userRoutes from "./routes/user.routes";
import cors from 'cors';

const port = 8000;
const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running!');
});
app.use(cors());
app.use('/users', userRoutes);


const startServer = async () => {
    try {
        await connection.initialize();
        console.log("Connected to Database");

        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    } catch (error) {
        console.error("Error during Data Source initialization:", error);
    }
};

startServer();



