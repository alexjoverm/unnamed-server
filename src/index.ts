// tslint:disable-next-line
require("dotenv").config()

import { NestFactory } from "@nestjs/core"
import { instance } from "./app"
import { ApplicationModule } from "./modules/app.module"

const app = NestFactory.create(ApplicationModule, instance)
app.listen(3000, () => console.log("Application is listening on port 3000"))
