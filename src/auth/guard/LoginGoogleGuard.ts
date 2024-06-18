import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { AuthService } from '../auth.service';

@Injectable()
export class LoginGoogleGuard extends AuthGuard('google') implements CanActivate {

    constructor(private readonly authService: AuthService) { 
        super()
    }

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        await super.canActivate(context);

        const request = context.switchToHttp().getRequest() as Request;
        const user = request.user;
        this.authService.googleLogin({...user, type: 2})
        await super.logIn(request);
        return true;
    }
}
