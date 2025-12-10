import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateOrderDto } from '../dto/create-order.dto';

@Controller('orders')
export class OrdersController {

    @MessagePattern('create-order')
    createOrder(@Body() data:CreateOrderDto){

        
    

    }

}
