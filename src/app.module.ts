import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WishlistModule } from './wishlist/wishlist.module';
import { UsersModule } from './users/users.module';
import { GoogleStrategy } from './google.strategy';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
// import { ModelModule } from './model/model.module';

@Module({
  imports: [WishlistModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule { }
