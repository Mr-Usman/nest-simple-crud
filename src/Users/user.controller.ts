 import {
    Controller,
    Get,
    Header,
    Post, 
    Body,
    Param,
    Patch,
    Delete 
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    addUser(
        @Body('name') name: string, 
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        const userInfo = { name, email, password };
        const newCreatedUser = this.userService.insertUser(userInfo);
        return newCreatedUser;
    }
};  