import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { User } from 'src/modules/users/users.entity';
import { UsersService } from 'src/modules/users/users.service';

declare global {
  namespace Express {
    interface Request {
      currentUser?: User;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private userService: UsersService) {}
  async use(request: Request, res: Response, next: NextFunction) {
    const { username } = request.session || {};
    if (username) {
      const user = await this.userService.findOne(username);
      request.currentUser = user;
    }
    return next();
  }
}
