import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WishlistModule } from './wishlist/wishlist.module';
import { UsersModule } from './users/users.module';
import { GoogleStrategy } from './google.strategy';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { ModelModule } from './model/model.module';
import { StudentModule } from './student/student.module';
// import { AWS_CONFIG } from './aws.config'; // File containing AWS credentials and region
import * as AWS from 'aws-sdk';
import { AwsSdkModule } from './aws-sdk.module';

@Module({
  imports: [WishlistModule, UsersModule, AuthModule, TodoModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'), StudentModule, AwsSdkModule ],
  controllers: [AppController],
  providers: [
    AppService,
    GoogleStrategy,
  ]
})
export class AppModule { }
