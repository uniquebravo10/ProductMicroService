import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { OrderService } from './order/order.service';

@Module({
  imports: [OrdersModule],
  controllers: [OrderServiceController, OrdersController],
  providers: [OrderServiceService, OrderService],
})
export class OrderServiceModule {}
