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
      this.connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
      });
      this.connection.connect();
    } catch (e) {
      console.log('Error connecting to local mySQL server. ' + e);
      return;
    }

    try {
      sql = 'drop database if exists csc4402db';
      await this.connection.query(sql);
      sql = 'create database csc4402db';
      await this.connection.query(sql);
      sql = 'use csc4402db';
      await this.connection.query(sql);
    } catch (e) {
      console.log('Error creating csc4402db. ' + e);
      return;
    }

    try {
      sql =
        'CREATE TABLE concentration (' +
        'id char(1), title varchar(40),' +
        'primary key (id))';
      await this.connection.query(sql);
      sql =
        'CREATE TABLE course (' +
        'id char(4), title varchar(50), con_id char(1), credit char(1),' +
        'primary key (id),' +
        'foreign key (con_id) references concentration(id));';
      await this.connection.query(sql);
      sql =
        'CREATE TABLE section (' +
        'course_id char(4), sec_id char(1), semester varchar(10), days varchar(10), start_time varchar(6), end_time varchar(6),' +
        'primary key (course_id, sec_id, semester),' +
        'foreign key (course_id) references course(id));';
      await this.connection.query(sql);
    } catch (e) {
      console.log('Error creating tables. ' + e);
      return;
    }

    try {
      // concentrations
      sql = "insert into concentration values ('0','Base Department Course');";
      await this.connection.query(sql);
      sql = "insert into concentration values ('1','Software Development');";
      await this.connection.query(sql);
      sql = "insert into concentration values ('2','Cybersecurity');";
      await this.connection.query(sql);
      sql =
        "insert into concentration values ('3','Cloud Computing & Networking');";
      await this.connection.query(sql);
      // courses
      sql =
        "insert into concentration values ('4','Data Science & Analytics');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('1350','Intro. to Comp. Sci.', '0', '4');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('1351','Intro. to Comp. Sci. II', '0', '4');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('3102','Advanced Data Structures', '0', '3');";
      await this.connection.query(sql);
      sql = "insert into course values ('4103','Operating Systems', '0', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('2259','Discrete Structures', '0', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('3380','Object Oriented Design', '0', '3');";
      await this.connection.query(sql);
      sql = "insert into course values ('2262','Numerical Methods', '0', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('3501','Comp. Org. and Design', '0', '3');";
      await this.connection.query(sql);
      sql = "insert into course values ('4402','DB Mgt Systems', '0', '3');";
      await this.connection.query(sql);
      sql = "insert into course values ('4430','Software Systems', '0', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('4101','Programming Langauges', '0', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('3200','Ethics in Computing', '0', '1');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('3304','Systems Programming', '1', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('4351','Compiler Construction', '1', '3');";
      await this.connection.query(sql);
      sql = "insert into course values ('4332','Software Testing', '1', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('3304','Intro. Systems Programming', '2', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('2362','Intro. to CyberSec', '2', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('4360','Malware Anal. & Rev. Eng.', '2', '3');";
      await this.connection.query(sql);
      sql = "insert into course values ('4501','Computer Networks', '2', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('4362','Software Vulnerability', '2', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('4562','Mobile Sec & Crypto', '2', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('2610','Cloud Fund. & Web Prog.', '3', '3');";
      await this.connection.query(sql);
      sql = "insert into course values ('4510','Computer Networks', '3', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('4610','Cloud Sys. & Virtual', '3', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('4562','Mobile Sec & Crypto', '3', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('2730','Data Sci & Analytics', '4', '3');";
      await this.connection.query(sql);
      sql = "insert into course values ('4740','Big Data Tech', '4', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('3730','Machine Learning & Data Anal.', '4', '3');";
      await this.connection.query(sql);
      sql =
        "insert into course values ('4343','Applied Deep Learning', '4', '3');";
      await this.connection.query(sql);

      // section
      sql =
        "insert into section values ('1350','1', 'Fall', 'T|TH', '1:30', '3:30');";
      await this.connection.query(sql);
    } catch (e) {
      console.log('Error inserting values. ' + e);
      return;
    }
  }

  async query_DB(sql: string) {
    const [rows, fields] = await this.connection.query(sql);
    console.log(rows);
    return rows;
  }
}
