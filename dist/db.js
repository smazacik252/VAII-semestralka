"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const connection = new typeorm_1.DataSource({
    type: "postgres",
    host: 'db',
    port: 5432,
    username: 'admin',
    password: 'password',
    database: 'db',
    logging: true,
    synchronize: true,
    entities: [User_1.User],
});
exports.default = connection;
