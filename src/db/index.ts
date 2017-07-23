import * as Sequelize from "sequelize"

const { DB_DRIVER, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env

export const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  dialect: DB_DRIVER,
  host: DB_HOST
})
