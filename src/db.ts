import "reflect-metadata";
import {DataSource} from 'typeorm';
import { User } from "./entities/User";
import {Item} from "./entities/Item";
import {Hero} from "./entities/Hero";
import {Article} from "./entities/Article";
import {Comment} from "./entities/Comment";


const connection = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'postgres',
    logging: true,
    synchronize: true,
    entities: [User, Hero, Item, Article, Comment],
});

export default connection;