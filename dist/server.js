"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const User_1 = require("./entities/User");
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Server is running!');
});
app.get('/db-check', async (req, res) => {
    try {
        await db_1.default.initialize(); // Test the connection explicitly
        res.status(200).send('Database connected successfully!');
    }
    catch (error) {
        console.error('Database connection failed:', error);
        res.status(500).send('Failed to connect to the database');
    }
});
app.get('/users', async (req, res) => {
    try {
        const userRepository = db_1.default.getRepository(User_1.User);
        const users = await userRepository.find();
        res.json(users);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
const startServer = async () => {
    try {
        await db_1.default.initialize();
        console.log("Connected to Database");
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    }
    catch (error) {
        console.error("Error during Data Source initialization:", error);
    }
};
startServer();
