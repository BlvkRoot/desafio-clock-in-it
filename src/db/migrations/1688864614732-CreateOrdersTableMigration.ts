import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrdersTableMigration1688864614732 implements MigrationInterface {
    name = 'CreateOrdersTableMigration1688864614732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "orders",
            columns: [
              {
                name: "id",
                type: "integer",
                isPrimary: true,
                isGenerated: true,
              },
              {
                name: "clientId",
                type: "integer",
              },
              {
                name: "productId",
                type: "integer",
              },
              {
                name: "date",
                type: "timestamp",
                default: "now()",
              },
            ],
            foreignKeys: [
              {
                columnNames: ["clientId"],
                referencedColumnNames: ["id"],
                referencedTableName: "clients",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
              },
              {
                columnNames: ["productId"],
                referencedColumnNames: ["id"],
                referencedTableName: "products",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "orders"`);
      }

}
