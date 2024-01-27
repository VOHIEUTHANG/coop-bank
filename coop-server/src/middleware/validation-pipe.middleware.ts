import { ValidationPipe } from '@nestjs/common';

const ValidationPipeMiddleware = new ValidationPipe({
  whitelist: true
});

export default ValidationPipeMiddleware;
