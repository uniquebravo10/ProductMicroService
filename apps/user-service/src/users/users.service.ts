import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSchema } from 'schema/schema/users.schema';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel('user') private userModel:Model<UserSchema>){}

    createUser(data:CreateUserDto){
        return this.userModel.create(data);
    }

    getAllUsers(){
        return this.userModel.find();
    }

    getUserById(id:string){
        return this.userModel.findById(id);
    }

}
