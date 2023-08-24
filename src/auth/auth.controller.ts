import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';
import { Auth } from './decorators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('token-login')
  @Auth()
  checkAuthToken(@GetUser() user: User) {
    return this.authService.tokenLogin(user);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testPrivate(@GetUser('email') user: User) {
    return {
      ok: true,
      msg: 'Private',
      user,
    };
  }
}
