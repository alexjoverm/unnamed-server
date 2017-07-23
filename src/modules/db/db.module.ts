import { Module, NestModule } from "@nestjs/common"
import { DBService } from "./db.service"

@Module({
  components: [DBService],
  exports: [DBService]
})
export class DBModule {}
