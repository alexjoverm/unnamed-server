import { Controller, Get, HttpStatus, Post } from "@nestjs/common"
import { Request, Response } from "express"
import { Model } from "sequelize-typescript"
import { DBService } from "../db/db.service"
import { User } from "../db/models/user"

@Controller("users")
export class UserController {
  private model: typeof User

  constructor(db: DBService) {
    this.model = db.getModel("User")
  }

  @Get()
  public async all(req: Request, res: Response) {
    const users = await this.model.findAll<User>()
    res.status(HttpStatus.OK).json(users)
  }

  // @Get('/:id')
  // public get( @Param('id') id) {}

  // @Post()
  // public create() {}
}
