/*
  The entry file of the application which uses the core function 
  NestFactory to create a Nest application instance.
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  // loads environment variables from a .env file into process.env
  dotenv.config(); 
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({origin: '*'});
  await app.listen(4000);
}
bootstrap();
