import * as knex from "knex";
import * as dotenv from "dotenv";

dotenv.config();
export default knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  },
  pool: {
    min: 0,
    max: 100
  },
  debug: false
});
