import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {

constructor(@Inject('order_service') private orderClient: ClientProxy){}
    @Post()
    createOrder(@Body() data:any){
        return this.orderClient.send('create-order', data);
    }

    @Get()
    getorders(){
        return this.orderClient.send('get-orders','');
    }

}
