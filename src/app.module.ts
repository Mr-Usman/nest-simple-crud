import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configObject } from './orm.config';
import { ProductModule } from './Products/product.module';
import { UserModule } from './Users/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(configObject), ProductModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
