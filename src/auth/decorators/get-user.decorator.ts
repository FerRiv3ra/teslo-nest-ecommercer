import {
  ExecutionContext,
  InternalServerErrorException,
  createParamDecorator,
} from '@nestjs/common';
import { User } from '../entities/user.entity';

type UserInfo = keyof User;
type dataPayload = UserInfo | UserInfo[] | undefined;

export const GetUser = createParamDecorator(
  (data: dataPayload, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new InternalServerErrorException('User not found in request');
    }

    if (!!data) {
      if (typeof data === 'string') {
        return user[data];
      } else {
        const infoReq = {};
        data.forEach((key) => {
          infoReq[key] = user[key];
        });

        return infoReq;
      }
    }

    return user;
  },
);
