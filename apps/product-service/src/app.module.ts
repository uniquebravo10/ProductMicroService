import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from 'database/database';
import { SchemaModule } from 'schema/schema';

@Module({
  imports: [ProductModule,DatabaseModule, SchemaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
