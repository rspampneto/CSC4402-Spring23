import { Injectable } from '@nestjs/common';
import { Connection, createConnection } from 'mysql2/promise';

@Injectable()
export class DatabaseService {
    private connection: Connection;

    // create database connection and establish schema if necessary
    async init_db(){
        // create connection using .env values
        this.connection = await createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PW,
        });
        
        this.connection.connect();
        let sql = "drop database if exists csc4402db";
        await this.connection.query(sql);
        sql = "create database csc4402db"
        await this.connection.query(sql);
        sql = "use csc4402db"
        await this.connection.query(sql);
        sql = "CREATE TABLE course (id CHAR(4), title VARCHAR(20), credits CHAR(1), primary key (id))";
        await this.connection.query(sql);
        sql = "insert into course values ('1350','Intro. to CompSci','4');";
        await this.connection.query(sql);
    }

    async query_DB(sql: string){
        const [rows, fields] = await this.connection.query(sql);
        return rows;
    }
}
