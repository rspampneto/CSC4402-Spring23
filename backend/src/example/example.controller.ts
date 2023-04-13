import { Controller, Get } from '@nestjs/common';
import { response } from 'express';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {

    constructor(
        private exampleService: ExampleService
    ){}

    @Get('')
    getTest(){
        return  this.exampleService.getAllCourses();
    }
}
