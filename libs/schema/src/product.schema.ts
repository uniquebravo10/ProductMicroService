import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ProductSchema{

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    price: number;

    @Prop({required: false})
    description?:string;

}
export const productSchema = SchemaFactory.createForClass(ProductSchema);