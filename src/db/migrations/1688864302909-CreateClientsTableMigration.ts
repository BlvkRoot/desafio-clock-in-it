import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClientsTableMigration1688864302909
  implements MigrationInterface
{
  name = "CreateClientsTableMigration1688864302909";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "clients" (
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, 
        "name" varchar NOT NULL, 
        "phone" varchar NOT NULL, 
        "address" varchar
    )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "clients"`);
  }
}
