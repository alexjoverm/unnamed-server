import { Module, NestModule } from "@nestjs/common"
import { DBModule } from "../db/db.module"
import { UserController } from "./user.controller"

@Module({
  controllers: [UserController],
  modules: [DBModule]
})
export class UserModule {}
