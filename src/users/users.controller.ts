import { Controller, Get, Post, Body, Patch, Param, Delete, Render, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('login')
  @Render('login.hbs')
  login() {
    return {message: 'success'};
  }

  @Get('auth/google')
  @UseGuards(AuthGuard('google'))
  execLogin() {}

  @Get('auth/google/redirect')
  authGoogleRedirect(@Req() req) {
    return this.usersService.execLogin(req);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
