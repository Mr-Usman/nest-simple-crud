import {MigrationInterface, QueryRunner} from "typeorm";

export class hobbiesColumnAdded1646909838809 implements MigrationInterface {
    name = 'hobbiesColumnAdded1646909838809'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" ADD "hobbies" character varying(100)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "hobbies"`);
    }

}
