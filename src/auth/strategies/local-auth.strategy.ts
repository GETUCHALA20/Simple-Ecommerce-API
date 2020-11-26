import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from "passport-local";
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    }); 
  }

  async validate(loginAttempt: LoginUserDto): Promise<any> {
    const user = await this.authService.validateUserByPassword(loginAttempt);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}