import "reflect-metadata";
import {DataSource} from 'typeorm';
import { User } from "./entities/User";

const connection = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'postgres',
    logging: true,
    synchronize: true,
    entities: [User],
});

export default connection;