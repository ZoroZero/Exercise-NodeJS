import { Controller, Post, Body, Get, Put, Delete,Param, ParseUUIDPipe, HttpException, HttpStatus, HttpService, Res, Response } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { CreatePostDto } from './create-user-post.dto'
import { Http2ServerResponse } from 'http2';
@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':uuid')
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