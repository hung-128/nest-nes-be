import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MemoryStore } from 'express-session';

@Module({
  controllers: [AuthController],
  providers: [AuthService, MemoryStore],
})
export class AuthModule {}
