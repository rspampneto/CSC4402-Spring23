import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CourseService {
  constructor(private db: DatabaseService) {}

  async getAllCourses() {
    return await this.db.query_DB('select * from course;');
  }

  async getConcentrationCourses(concentration_id: number) {
    if(concentration_id != 5){
      return await this.db.query_DB(
        `select * from course where con_id = 0 or con_id = ${concentration_id}`,
      );
    }
    else {
      return await this.db.query_DB(
        `select * from course where con_id = ${concentration_id}`,
      );
    }
  }
}
