// Update with your env settings.
require('dotenv').config({ path: '../.env' });

const config = {
  client: 'pg',
  connection: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PWORD,
    port: 5433,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: './migrations',
  },
};
 
module.exports = config;
