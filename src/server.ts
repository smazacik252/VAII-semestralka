import "reflect-metadata";
import express, { Request, Response } from 'express';
import connection from './db';
import userRoutes from "./routes/user.routes";
import cors from 'cors';
import heroRoutes from "./routes/hero.routes";
import itemRoutes from "./routes/item.routes";
import articleRoutes from "./routes/article.routes";

const port = 8000;
const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running!');
});
app.use(cors());
app.use('/users', userRoutes);
app.use('/heroes', heroRoutes);
app.use('/items', itemRoutes);
app.use('/articles', articleRoutes);


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



