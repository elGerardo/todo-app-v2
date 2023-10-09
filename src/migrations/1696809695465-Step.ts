import { MigrationInterface, QueryRunner } from "typeorm"

export class Step1696809695465 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS step(
                id varchar(255) PRIMARY KEY,
                taskId varchar(255) NOT NULL,
                name varchar(255) NOT NULL,
                description varchar(255) NOT NULL,
                color varhcar(255) NOT NULL,
                order varhcar(255) NOT NULL,
                created_at datetime NOT NULL,
                updated_at datetime NOT NULL,
                FOREIGN KEY (taskId) REFERENCES task(id)
            )
        `)
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
