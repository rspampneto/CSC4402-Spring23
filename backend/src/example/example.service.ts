import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ExampleService {

    constructor(
        private db: DatabaseService
    ){}

    async getAllCourses(){
        return await this.db.query_DB("select * from course;");
    }
}
