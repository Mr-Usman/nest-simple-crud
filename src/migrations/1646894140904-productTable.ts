import {MigrationInterface, QueryRunner} from "typeorm";

export class productTable1646894140904 implements MigrationInterface {
    name = 'productTable1646894140904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Products" RENAME COLUMN "category" TO "sku"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Products" RENAME COLUMN "sku" TO "category"`);
    }

}
