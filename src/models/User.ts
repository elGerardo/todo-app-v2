import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import DB from '../index'
import { Task } from "./Task"

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updadetAt: Date

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[]

    static async query(){
        return (await DB).manager.getRepository(User)
    }
}