const { Pool } = require('pg');
const PG_URI = 'postgres://qstolosl:TvXFHZDLYWzSTCmvW1oyrDGhW-OCNwP8@ziggy.db.elephantsql.com:5432/qstolosl';

const pool = new Pool({
    connectionString: PG_URI
});



module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
