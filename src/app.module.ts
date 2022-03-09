import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configObject } from './orm.config';
import { ProductModule } from './Products/product.module';

@Module({
  imports: [TypeOrmModule.forRoot(configObject), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
