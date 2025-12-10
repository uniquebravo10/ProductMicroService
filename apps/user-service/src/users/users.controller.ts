import { Body, Controller, HttpException, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from '../dto/create-user.dto';
import mongoose from 'mongoose';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @MessagePattern('create-user')
    async createUser(@Body() data: CreateUserDto) {
        return await this.userService.createUser(data);
    }

    @MessagePattern('get-users')
    async getUsers() {
        return await this.userService.getAllUsers();
    }

    @MessagePattern('get-user')
    async getUserById(@Param('id') id: string) {
        const valid = mongoose.Types.ObjectId.isValid(id.toString());
        if (!valid) {
            throw new HttpException("Id is not Valid", 400);
        }
        const user = this.userService.getUserById(id.toString());
        if (!user) {
            throw new HttpException("user Not found", 404);
        }
    }

}
