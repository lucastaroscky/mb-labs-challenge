import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User, Event } from '../../src/entities';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: Number(process.env.MYSQLDB_LOCAL_PORT),
  username: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_ROOT_PASSWORD,
  database: process.env.MYSQLDB_DATABASE,
  entities: [User, Event],
  synchronize: true,
  logging: true
});

async function databaseInit() {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (err: unknown) {
    console.error('Error during Data Source initialization', err);
  }
}

export default databaseInit;
