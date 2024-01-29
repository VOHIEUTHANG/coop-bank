import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { BranchModule } from '../branch/branch.module';
import { ProductModule } from '../product/product.module';
import { ReportsModule } from '../reports/reports.module';
import { APP_PIPE } from '@nestjs/core';
import { User } from '../users/users.entity';
import { Report } from '../reports/reports.entity';
import { Product } from '../product/entities/product.entity';
import ValidationPipeMiddleware from 'src/middleware/validation-pipe.middleware';
import CookieSessionMiddleware from 'src/middleware/cookie-session.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import getEnvPath from 'src/helper/get-env-path.helper';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: getEnvPath()
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.get('DB_HOST'),
          port: config.get('DB_PORT'),
          username: config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_NAME'),
          // entities: ['dist/**/*.entity{.ts,.js}'],
          entities: [User, Report, Product],
          synchronize: true
        };
      }
    }),
    UsersModule,
    BranchModule,
    ProductModule,
    ReportsModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: ValidationPipeMiddleware
    }
  ]
})
export class AppModule {
  constructor(private config: ConfigService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CookieSessionMiddleware(this.config.get<string>('COOKIE_KEY'))).forRoutes('*');
  }
}
