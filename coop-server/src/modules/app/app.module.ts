import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { APP_PIPE } from '@nestjs/core';
import ValidationPipeMiddleware from 'src/middleware/validation-pipe.middleware';
import CookieSessionMiddleware from 'src/middleware/cookie-session.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import applicationConfig from 'src/config/application';
import databaseConfig from 'src/config/database';
import { AuthModule } from '../auth/auth.module';
import { MenuModule } from '../menu/menu.module';
import { BranchModule } from '../branch/branch.module';
import { RepresentativeModule } from '../representative/representative.module';
import { BankRepresentativeModule } from '../bank-representative/bank-representative.module';
import { AffiliateUnitModule } from '../affiliate-unit/affiliate-unit.module';
import { IndividualModule } from '../individual/individual.module';
import { GiftModule } from '../gift/gift.module';
import { ScheduleModule } from '@nestjs/schedule';
import { SpecialDayModule } from '../special-day/special-day.module';
import { TransactionRoomModule } from '../transaction-room/transaction-room.module';
import { ContractModule } from '../contract/contract.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [applicationConfig, databaseConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('database')
    }),
    AuthModule,
    UsersModule,
    MenuModule,
    BranchModule,
    RepresentativeModule,
    BankRepresentativeModule,
    AffiliateUnitModule,
    IndividualModule,
    GiftModule,
    SpecialDayModule,
    TransactionRoomModule,
    ContractModule
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
