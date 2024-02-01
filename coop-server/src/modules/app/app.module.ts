import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { ReportsModule } from '../reports/reports.module';
import { APP_PIPE } from '@nestjs/core';
import ValidationPipeMiddleware from 'src/middleware/validation-pipe.middleware';
import CookieSessionMiddleware from 'src/middleware/cookie-session.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import applicationConfig from 'src/config/application';
import databaseConfig from 'src/config/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [applicationConfig, databaseConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('database')
    }),
    UsersModule,
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
    consumer
      .apply(CookieSessionMiddleware(this.config.get('application.cookie_key')))
      .forRoutes('*');
  }
}
