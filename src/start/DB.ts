import { ConnectionSource } from '../config/db'

export default class DB {
    public static async handle() {
        await ConnectionSource.initialize()
        return ConnectionSource
    }
}