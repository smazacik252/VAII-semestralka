import { Pool } from 'pg';
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'admin',
    password: 'password',
    database: 'db',
})

export default pool;