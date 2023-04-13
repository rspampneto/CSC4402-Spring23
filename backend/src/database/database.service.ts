import { Injectable } from '@nestjs/common';
import { createConnection } from 'mysql2';

@Injectable()
export class DatabaseService {

    // create database connection and establish schema if necessary
    init_db(){
        // create connection using .env values
        const connection = createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PW,
            database: process.env.DB_NAME,
        });
        
        connection.connect(
            function(err) {
                if (err) throw err;
                console.log("Connected!");
                const sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
                connection.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("Table created");
                });
            }
        );
    }
}
