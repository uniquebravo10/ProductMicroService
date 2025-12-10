import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class UserSchema{
    @Prop({required:true})
    name:string;

    @Prop({required:true, unique:true})
    email:string;

    @Prop({required:true})
    phone:string;

}

export const userSchema = SchemaFactory.createForClass(UserSchema);
