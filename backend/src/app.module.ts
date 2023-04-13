import { Module, OnModuleInit } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ExampleModule } from './example/example.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [
    DatabaseModule, 
    ExampleModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit{
  constructor(private db: DatabaseService){}
  // establish DB connection after core app module initialization
  onModuleInit() {
    this.db.init_db();
  }
}
