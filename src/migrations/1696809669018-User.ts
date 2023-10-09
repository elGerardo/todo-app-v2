import { MigrationInterface, QueryRunner } from "typeorm"

export class User1696809669018 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS user (
                id varchar(255) PRIMARY KEY,
                username varchar(255) NOT NULL,
                firstName varchar(255) NOT NULL,
                lastName varchar(255) NOT NULL,
                email varchar(255) NOT NULL,
                password varchar(255) NOT NULL,
                created_at datetime NOT NULL,
                updated_at datetime NOT NULL
            )
        `)
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
