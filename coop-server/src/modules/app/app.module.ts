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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '0335647164Abc',
      database: 'coop-bank',
      // entities: ['dist/**/*.entity{.ts,.js}'],
      entities: [User, Report, Product],
      synchronize: true
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
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CookieSessionMiddleware).forRoutes('*');
  }
}
