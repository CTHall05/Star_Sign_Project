const { Pool } = import("pg");
const pool = new Pool({
    connectionString: process.env.POSTGRESS_CONNECTION_URL,
});

module.exports = {
    query: function (text, params) {
        return pool.query(text, params);
    },
};