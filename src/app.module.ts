import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [ProjectModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
