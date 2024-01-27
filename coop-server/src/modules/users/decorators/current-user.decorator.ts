import { ExecutionContext, createParamDecorator } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CurrentUser = createParamDecorator((_: never, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  return request.currentUser || null;
});
