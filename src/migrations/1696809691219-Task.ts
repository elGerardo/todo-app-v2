import { MigrationInterface, QueryRunner } from "typeorm"

export class Task1696809691219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS task(
                id varchar(255) PRIMARY KEY,
                userId varchar(255) NOT NULL,
                name varchar(255) NOT NULL,
                description varchar(255) NOT NULL,
                color varhcar(255) NOT NULL,
                created_at datetime NOT NULL,
                updated_at datetime NOT NULL,
                FOREIGN KEY (userId) REFERENCES User(id)
            )
        `)
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
