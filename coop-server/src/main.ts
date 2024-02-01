import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './modules/app/app.module';
import { config as dotenvConfig } from 'dotenv';
import { getEnvPath, enviroment } from './helper/enviroment.helper';

dotenvConfig({ path: getEnvPath() });

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  const config = new DocumentBuilder()
    .setTitle('Coop Bank')
    .setDescription('The coop bank API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(process.env.PORT || 3000);
  console.log(`Nest app started at http://localhost:${process.env.PORT || 3000} [${enviroment}]`);
}
bootstrap();
