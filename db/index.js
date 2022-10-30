import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    connectionString: process.env.POSTGRESS_CONNECTION_URL,
});

export default function query (text, params) {
    return Pool.query(text, params);
}