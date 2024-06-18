import { AuthService } from './auth.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Res , UseGuards, Req} from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { MemoryStore } from 'express-session';
import { LoginGoogleGuard } from './guard/LoginGoogleGuard';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly memoryStore: MemoryStore
  ) {}
      
  @Get('login')
  loginView(@Res() res:Response ){
    return res.render('login.hbs')
  }

  @Post('login')
  loginExec(@Body() loginDto: LoginDto){
    
  }
  
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/exec')
  @UseGuards(LoginGoogleGuard)
  googleAuthRedirect(@Req() req) {
    const user = req.user
    const sessions = this.memoryStore.all(); // Lấy tất cả các session
    console.log(sessions);
    
  }
}
