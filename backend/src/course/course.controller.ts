import { Controller, Get, Param } from '@nestjs/common';
import { response } from 'express';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

    constructor(
        private courseService: CourseService
    ){}

    @Get('')
    getTest(){
        return  this.courseService.getAllCourses();
    }

    @Get(':id')
    getConcentrationCourses(@Param() {id: concID}){
        return this.courseService.getConcentrationCourses(concID);
    }
}
