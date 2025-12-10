import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { DatabaseModule } from 'database/database';
import { SchemaModule } from 'schema/schema';


@Module({
  imports: [OrdersModule],
  controllers: [OrderServiceController, OrdersController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}
