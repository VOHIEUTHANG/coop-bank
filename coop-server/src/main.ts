import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './modules/app/app.module';
import { config as dotenvConfig } from 'dotenv';
import { getEnvPath, enviroment } from './helper/enviroment.helper';
import { SerializeData } from './interceptors/serialize-data.interceptor';
import { urlencoded, json } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

dotenvConfig({ path: getEnvPath() });

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { abortOnError: false });
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new SerializeData());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/public/'
  });

  const config = new DocumentBuilder()
    .setTitle('Coop Bank')
    .setDescription('The coop bank API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(process.env.PORT || 3000);
  console.log(`Nest app started at http://localhost:${process.env.PORT || 3000} [${enviroment}]`);
}
bootstrap();
