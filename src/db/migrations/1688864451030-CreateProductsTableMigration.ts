import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductsTableMigration1688864451030
  implements MigrationInterface
{
  name = "CreateProductsTableMigration1688864451030";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "products" (
            "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
            "name" varchar NOT NULL, 
            "description" varchar NOT NULL, 
            "price" integer NOT NULL
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
