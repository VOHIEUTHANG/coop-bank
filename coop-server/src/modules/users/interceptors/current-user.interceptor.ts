import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private userService: UsersService) {}
  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { username } = request.session || {};
    if (username) {
      const user = await this.userService.findOne(username);
      request.currentUser = user;
    }
    return next.handle();
  }
}
