import {MigrationInterface, QueryRunner} from "typeorm";

export class UserandTaskRelationshipDefind1646911059028 implements MigrationInterface {
    name = 'UserandTaskRelationshipDefind1646911059028'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Products" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "Products" ADD CONSTRAINT "FK_c6793aee02b80c52534aef6d546" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Products" DROP CONSTRAINT "FK_c6793aee02b80c52534aef6d546"`);
        await queryRunner.query(`ALTER TABLE "Products" DROP COLUMN "userId"`);
    }

}
