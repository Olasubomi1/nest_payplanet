import { db_host, db_name, db_password, db_port, db_user } from 'dbconfig';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  port: db_port,
  database: db_name,
  host: db_host,
  username: db_user,
  password: db_password,
};

export default config;
