import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class OrderSchema{

    @Prop({required:true})
    name:string;

    @Prop({required:true})
    qty:string;

    

}

export const orderSchema = SchemaFactory.createForClass(OrderSchema);