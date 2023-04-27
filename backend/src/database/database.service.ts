import { Injectable } from '@nestjs/common';
import { Connection, createConnection } from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private connection: Connection;

  // create database connection and establish schema if necessary
  async init_db() {
    let sql;
    try {
      // create connection using .env values
      this.connection = await createConnection(process.env.DB_URL);
      this.connection.connect();
    } catch (e) {
      console.log('Error connecting to local mySQL server. ' + e);
      return;
    }
  }

  async query_DB(sql: string) {
    const [rows, fields] = await this.connection.query(sql);
    console.log(rows);
    return rows;
  }
}
