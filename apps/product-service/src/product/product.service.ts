import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ProductSchema } from 'schema/schema/product.schema';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('product') private productModel:Model<ProductSchema>){}


    createProduct(data: CreateProductDto){
        return this.productModel.create(data);
    }

    getAllProduct(){
        return this.productModel.find();
    }

    getProductById(id:string){
        const product = this.productModel.findById(id);
        if(!product){
            throw new HttpException('Product Not Found', 404);
        }
        return product;
    }


}
