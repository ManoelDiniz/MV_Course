import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "masterkey",
    database: "mv_course",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [`${__dirname} /migration/**/*.{ts,js}`],
    subscribers: [],
})
