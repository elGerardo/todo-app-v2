import { DataSource  } from "typeorm"
import Env from "../../Env";

export const ConnectionSource  = new DataSource({
    migrationsTableName: 'migrations',
    type: 'mysql',
    host: Env.DB_HOST,
    port: Env.DB_PORT,
    username: Env.DB_USERNAME,
    password: Env.DB_PASSWORD,
    database: Env.DB_NAME,
    synchronize: true,
    entities: ['src/models/**/*.ts'],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: []
});
