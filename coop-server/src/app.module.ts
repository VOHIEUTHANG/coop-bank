import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { BranchModule } from './modules/branch/branch.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '0335647164Abc',
      database: 'coop-bank',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule,
    BranchModule,
    ProductModule
  ]
})
export class AppModule {}
