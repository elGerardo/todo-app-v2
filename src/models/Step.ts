import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Task } from "./Task"
import DB from "../index"

@Entity()
export class Step {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    taskId: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    order: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updadetAt: Date

    @ManyToOne(() => Task, (task) => task.steps)
    task: Task

    static async query(){
        return (await DB).manager.getRepository(Step)
    }
}
