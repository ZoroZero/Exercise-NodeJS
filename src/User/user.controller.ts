import { Controller, Post, Body, Get, Put, Delete,Param, ParseUUIDPipe } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { CreatePostDto } from './create-user-post.dto'
@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':uuid')
    get(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
        return this.service.getUser(uuid);
        // return this.service.getUsers();
    }

    @Post()
    create(@Body() user: CreatePostDto) {
        // console.log(user)
        var response = {};

        return this.service.createUser(user).then(function(res){
            console.log(res);
            return {
                "statusCode" : 200
            }
            console.log(response);
        })
        .catch(function(err){
            return err
        });
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}