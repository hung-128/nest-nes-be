import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
// import { User, UsersService } from '../users/users.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class UserSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  serializeUser() {
  }

  deserializeUser(username: string, done: Function) {
    // const user = this.usersService.findByUsername(username);

    // if (!user) {
    //   return done(
    //     `Could not deserialize user: user with ${username} could not be found`,
    //     null,
    //   );
    // }

    // done(null, user);
  }
}