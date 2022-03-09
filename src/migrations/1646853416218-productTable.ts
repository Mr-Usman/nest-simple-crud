import { MigrationInterface, QueryRunner } from 'typeorm';

export class productTable1646853416218 implements MigrationInterface {
  name = 'productTable1646853416218';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Products" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "title" character varying(100) NOT NULL, "price" character varying(100) NOT NULL, "description" text, CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Products"`);
  }
}
