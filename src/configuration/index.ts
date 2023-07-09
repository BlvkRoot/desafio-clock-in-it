import { join } from "path";

export const DATA_BASE_CONFIGURATION = {
  type: "sqlite",
  database: "db.sqlite",
  entities: [join(`${__dirname}\\..`, '**', '*.model.{ts,js}')],
  migrations: ['dist/db/migrations/*.{ts,js}'],
  // synchronize: true,
};
