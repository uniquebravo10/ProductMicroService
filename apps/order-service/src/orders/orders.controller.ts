import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrdersService } from './orders.service';
import mongoose from 'mongoose';

@Controller('orders')
export class OrdersController {

    constructor(private orderService: OrdersService){}
    @MessagePattern('create-order')
    async createOrder(@Body() data:CreateOrderDto){
        return await this.orderService.createOrder(data);
    }

    @MessagePattern('get-orders')
    async getOrders(){
        return await this.orderService.getAllOrders();
    }
}
