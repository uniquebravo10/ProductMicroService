import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';
import { OrdersController } from './orders/orders.controller';

@Module({
  imports: [],
  controllers: [OrderServiceController, OrdersController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}
