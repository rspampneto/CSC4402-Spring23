import { Controller, Get, Param } from '@nestjs/common';
import { response } from 'express';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

    constructor(
        private exampleService: CourseService
    ){}

    @Get('')
    getTest(){
        return  this.exampleService.getAllCourses();
    }

    @Get(':id')
    getConcentrationCourses(@Param() {id: concID}){
        return this.exampleService.getConcentrationCourses(concID);
    }
}
