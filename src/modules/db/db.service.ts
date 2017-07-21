import { Component } from "@nestjs/common"
import * as Sequelize from "sequelize"

@Component()
export class DBService {
  // tslint:disable-next-line
  private _db

  constructor() {
    const {
      DB_DRIVER,
      DB_HOST,
      DB_USERNAME,
      DB_PASSWORD,
      DB_NAME
    } = process.env

    this._db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
      dialect: DB_DRIVER,
      host: DB_HOST
    })
  }

  public get db() {
    return this._db
  }
}
