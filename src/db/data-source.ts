import { DataSource, DataSourceOptions } from "typeorm";
import { DATA_BASE_CONFIGURATION } from "../configuration";

const dataSource = new DataSource(DATA_BASE_CONFIGURATION as DataSourceOptions);
export default dataSource;