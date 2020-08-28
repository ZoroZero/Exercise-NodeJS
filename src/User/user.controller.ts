import { Controller, Post, Body, Get, Put, Delete,Param, ParseUUIDPipe,  UseFilters, UseInterceptors} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { CreatePostDto } from './create-user-post.dto'
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { TransformInterceptor } from '../interceptors/response.interceptor';
@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':uuid')
    @UseFilters(new HttpExceptionFilter())
    @UseInterceptors(TransformInterceptor)
    get(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
        return this.service.getUser(uuid);
        // return this.service.getUsers();
    }

    @Get('')
    @UseInterceptors(TransformInterceptor)
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