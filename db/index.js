import pool from "pg";
const Pool = new pool({
    connectionString: process.env.POSTGRESS_CONNECTION_URL,
});

export function query (text, params) {
    return Pool.query(text, params);
}