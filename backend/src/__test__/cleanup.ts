// @ts-ignore
import * as knexCleaner from "knex-cleaner";
import db from "../db";

console.log("cleaning");
knexCleaner.clean(db).then(() => {
  console.log("cleaned");
  process.exit(0);
});
