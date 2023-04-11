import { Controller, Get } from '@nestjs/common';
import { response } from 'express';

@Controller('example')
export class ExampleController {

    @Get('')
    getTest(){
        return  "Hello from server!";
    }
}
