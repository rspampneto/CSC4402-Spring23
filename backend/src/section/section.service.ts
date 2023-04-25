import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SectionService {

    constructor(
        private db: DatabaseService
    ){}

    async getSectionForCourse(courseID: number){
        return await this.db.query_DB(`select * from section where course_id = ${courseID}`);
    }
}
