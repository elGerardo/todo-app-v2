import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm"
import { User } from "./User"
import { Step } from "./Step"
import DB from "../index"

@Entity()
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    userId: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    color: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updadetAt: Date

    @ManyToOne(() => User, (user) => user.tasks)
    user: User

    @OneToMany(() => Step, (step) => step.task)
    steps: Step[]

    static async query(){
        return (await DB).manager.getRepository(Task)
    }
}