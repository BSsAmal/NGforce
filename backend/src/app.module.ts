import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { CreateCvModule } from './create-cv/create-cv.module';
import { PostJobModule } from './post-job/post-job.module';

@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://localhost:27017/users'), CompanyModule, CreateCvModule, PostJobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
