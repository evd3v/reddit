import { Post } from "./entities/Post"
import { __prod__ } from "./constants"
import { MikroORM } from "@mikro-orm/core"
import path from "path"
import { User } from "./entities/User"

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "lireddit",
  user: "postgres",
  password: "evgen57ruS",
  type: "postgresql",
  debug: true,
} as Parameters<typeof MikroORM.init>[0]
