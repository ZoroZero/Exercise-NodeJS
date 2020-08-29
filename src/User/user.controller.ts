import { Controller, Post, Body, Get, Put, Delete,Param, ParseUUIDPipe,  UseFilters, UseInterceptors} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { CreatePostDto } from './create-user-post.dto'
import { HttpExceptionFilter } from '../filters/http-exception.filter';
import { GetInterceptor } from '../interceptors/http-get.interceptor';
import { EditInterceptor } from '../interceptors/http-edit.interceptor';
@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':uuid')
    @UseFilters(new HttpExceptionFilter())
    @UseInterceptors(GetInterceptor)
    get(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
        return this.service.getUser(uuid);
        // return this.service.getUsers();
    }

    @Get('')
    @UseFilters(new HttpExceptionFilter())
    @UseInterceptors(GetInterceptor)
    getAll() {
        return this.service.getUsers();
        // return this.service.getUsers();
    }

    @Post()
    @UseFilters(new HttpExceptionFilter())
    @UseInterceptors(EditInterceptor)
    create(@Body() user: CreatePostDto) {
        // console.log(user)
        // var response = {};

        return this.service.createUser(user);
    }

    @Put()
    @UseFilters(new HttpExceptionFilter())
    @UseInterceptors(EditInterceptor)
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':uuid')
    @UseFilters(new HttpExceptionFilter())
    @UseInterceptors(EditInterceptor)
    deleteUser(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
        return this.service.deleteUser(uuid);
    }
}