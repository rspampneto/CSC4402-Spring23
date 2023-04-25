import { Controller, Get, Param } from '@nestjs/common';
import { SectionService } from './section.service';

@Controller('section')
export class SectionController {

    constructor(private sectionService:SectionService){} 

    @Get(':id')
    getConcentrationCourses(@Param() {id: courseID}){
        console.log(courseID);
        return this.sectionService.getSectionForCourse(courseID);
    }
}
