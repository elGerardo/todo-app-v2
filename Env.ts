import "dotenv/config"

const defaultDB = {
    PORT: 3001,
    DB_HOST: '127.0.0.1',
    DB_PASSWORD: '',
    DB_PORT: 3306,
    DB_USERNAME: 'root',
    DB_NAME: 'mysql'
}

type Env = {
    PORT: number
    DB_HOST: string,
    DB_PASSWORD: string,
    DB_PORT: number,
    DB_USERNAME: string,
    DB_NAME: string 
}

const Env : Env = {
    PORT: process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3001,
    DB_HOST: process.env.DB_HOST !== undefined ? process.env.DB_HOST : defaultDB.DB_HOST,
    DB_PASSWORD: process.env.DB_PASSWORD !== undefined ? process.env.DB_PASSWORD : defaultDB.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT !== undefined ? parseInt(process.env.DB_PORT) : defaultDB.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME !== undefined ? process.env.DB_USERNAME : defaultDB.DB_USERNAME,
    DB_NAME: process.env.DB_NAME !== undefined ? process.env.DB_NAME : defaultDB.DB_NAME
}

export default Env