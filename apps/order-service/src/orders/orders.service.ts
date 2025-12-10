import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderSchema } from 'schema/schema/orders.schema';
import { CreateOrderDto } from '../dto/create-order.dto';


@Injectable()
export class OrdersService {

    constructor(@InjectModel('order') private orderModel:Model<OrderSchema>){}


    createOrder(order: CreateOrderDto){
        const newOrder = this.orderModel.create(order);
        return newOrder;
    }

    getAllOrders(){
        return this.orderModel.find();
    }


}
