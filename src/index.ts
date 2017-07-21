import * as express from "express"
import { NestFactory } from "@nestjs/core"
import { ApplicationModule } from "./modules/app.module"

const instance = express()
const app = NestFactory.create(ApplicationModule, instance)
app.listen(3000, () => console.log("Application is listening on port 3000"))
