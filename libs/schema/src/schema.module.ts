import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { orderSchema } from './orders.schema';
import { productSchema } from './product.schema';
import { userSchema } from './users.schema';


@Module({
  imports:[MongooseModule.forFeature([
    {name:'order', schema:orderSchema},
    {name:"product", schema:productSchema},
    {name:"user", schema:userSchema},

  ])],
  providers: [],
  exports: [MongooseModule],
})
export class SchemaModule {}
