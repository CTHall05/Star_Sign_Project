import pkg from 'pg';
const {Pool} = pkg;
const pool = new pkg.Pool({
    connectionString: process.env.POSTGRESS_CONNECTION_URL,
});
  
function query(text, params) { 
    return pool.query(text, params);
}

export default query  