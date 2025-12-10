import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class OrderSchema{

    @Prop({required:true})
    name:string;

    @Prop({required:true})
    qty:string
}