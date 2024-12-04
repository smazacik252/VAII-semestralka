import "reflect-metadata";
import express, { Request, Response } from 'express';
import connection from './db';
import {User} from "./entities/User";

const port = 8000;
const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running!');
});

app.get('/db-check', async (req: Request, res: Response) => {
    try {
        await connection.initialize(); // Test the connection explicitly
        res.status(200).send('Database connected successfully!');
    } catch (error) {
        console.error('Database connection failed:', error);
        res.status(500).send('Failed to connect to the database');
    }
});


app.get('/users', async (req: Request, res: Response) => {
    try {
        const userRepository = connection.getRepository(User);
        const users = await userRepository.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

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



