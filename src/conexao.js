const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: process.env.DB_DBNAME,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = knex;
