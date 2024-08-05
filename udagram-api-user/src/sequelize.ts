import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: "postgres",
  password: "postgres",
  database: "postgres",
  host: "son-db.cwywa9aobcux.us-east-1.rds.amazonaws.com",

  dialect: config.dialect,
  storage: ":memory:",
});
