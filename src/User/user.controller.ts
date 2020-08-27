import { Controller, Post, Body, Get, Put, Delete,Param, ParseUUIDPipe, UseFilters } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { CreatePostDto } from './create-user-post.dto'
import { HttpExceptionFilter } from '../filters/http-exception.filter'
@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':uuid')
    @UseFilters(new HttpExceptionFilter())
    get(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
        return this.service.getUser(uuid);
        // return this.service.getUsers();
    }

    @Get('')
    getAll() {
        return this.service.getUsers();
        // return this.service.getUsers();
    }

    @Post()
    @UseFilters(new HttpExceptionFilter())
    create(@Body() user: CreatePostDto) {
        // console.log(user)
        // var response = {};

        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':uuid')
    deleteUser(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
        return this.service.deleteUser(uuid);
    }
}