import { Body, Controller, HttpException, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateProductDto } from '../dto/create-product.dto';
import mongoose from 'mongoose';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @MessagePattern('create-product')
    async createProduct(@Body() data:CreateProductDto){
        return await this.productService.createProduct(data);
    }

    @MessagePattern('get-products')
    async getProducts(){
        return await this.productService.getAllProduct();
    }
    @MessagePattern('get-product')
    async getProductById(@Param(':id') id: Number){
        const valid = mongoose.Types.ObjectId.isValid(id.toString());
        if(!valid){
            throw new HttpException("Id is not Valid",400);
        }
        const product = this.productService.getProductById(id.toString());
        if(!product){
            throw new HttpException("product Not found", 404);
        }

    }


}
