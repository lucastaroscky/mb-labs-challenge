import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User, Event } from '../../src/entities';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_ROOT_PASSWORD,
  database: process.env.MYSQLDB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User, Event]
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