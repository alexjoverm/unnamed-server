import { Component, Shared } from "@nestjs/common"
import { HttpException } from "@nestjs/core"
import * as pg from "pg"
import { Model, Sequelize } from "sequelize-typescript"

@Shared()
@Component()
export class DBService {
  private db: Sequelize

  constructor() {
    const {
      DB_DRIVER,
      DB_HOST,
      DB_USERNAME,
      DB_PASSWORD,
      DB_NAME
    } = process.env

    this.db = new Sequelize({
      dialect: DB_DRIVER,
      host: DB_HOST,
      modelPaths: [__dirname + "/models"],
      name: DB_NAME,
      password: DB_PASSWORD,
      username: DB_USERNAME
    })

    // This will run .sync() only if database name ends with '_test' or '_dev'
    this.db.sync({ force: true, match: /(_test|_dev)$/ })
  }

  public getModel<T>(model: string): any {
    return this.db.models[model] as any
  }
}
