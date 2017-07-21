import { Module, Shared } from "@nestjs/common"

import { DBService } from "./db.service"

@Shared()
@Module({
  components: [DBService],
  exports: [DBService]
})
export class DBModule {}
