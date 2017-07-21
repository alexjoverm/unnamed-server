import * as bodyParser from "body-parser"
import * as compression from "compression"
import * as cors from "cors"
import * as express from "express"
import * as helmet from "helmet"

export const instance = express()

instance.use(cors())
instance.use(helmet())
instance.use(compression())
instance.use(bodyParser.json())
instance.use(bodyParser.urlencoded({ extended: true }))
