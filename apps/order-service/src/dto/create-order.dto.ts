import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDto{

    @IsString()
    @IsNotEmpty()
name:string;

    @IsNotEmpty()
    @IsNumber()
qty:number;


}