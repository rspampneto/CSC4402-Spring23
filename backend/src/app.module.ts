import { Module, OnModuleInit } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CourseModule } from './course/course.module';
import { DatabaseService } from './database/database.service';
import { SectionModule } from './section/section.module';

@Module({
  imports: [DatabaseModule, CourseModule, SectionModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor(private db: DatabaseService) {}
  // establish DB connection after core app module initialization
  async onModuleInit() {
    await this.db.init_db();
  }
}
