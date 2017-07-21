import { Module } from "@nestjs/common"
import { DBModule } from "./db/db.module"

@Module({
  modules: [DBModule]
})
export class ApplicationModule {}
