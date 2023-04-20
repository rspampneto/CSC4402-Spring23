import { Injectable } from '@nestjs/common';
import { Connection, createConnection } from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private connection: Connection;

  // create database connection and establish schema if necessary
  async init_db() {
    let sql;
    try{
      // create connection using .env values
      this.connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
      });
      this.connection.connect();
    } catch(e){
      console.log("Error connecting to local mySQL server. " + e);
      return;
    }

    try{
      sql = 'drop database if exists csc4402db';
      await this.connection.query(sql);
      sql = 'create database csc4402db';
      await this.connection.query(sql);
      sql = 'use csc4402db';
      await this.connection.query(sql);
    } catch(e){
      console.log("Error creating csc4402db. " + e);
      return;
    }

    try{
      sql = 'CREATE TABLE course (course_id varchar(10), concentration varchar(20), title varchar(20), primary key (course_id, concentration));';
      await this.connection.query(sql);
      sql = 'CREATE TABLE section (id varchar(10), course_id varchar(10), semester varchar(10), start varchar(10), end varchar(10), days varchar(20), room varchar(20), prof varchar(30), primary key(id, course_id, semester), foreign key(course_id) references course);';
      await this.connection.query(sql);
      sql = 'CREATE TABLE concentration (id varchar(10), title varchar(20), primary key(id));';
      await this.connection.query(sql);
    } catch(e){
      console.log("Error creating csc4402db. " + e);
      return;
    }
  }

  async query_DB(sql: string) {
    const [rows, fields] = await this.connection.query(sql);
    console.log(rows);
    return rows;
  }
}
