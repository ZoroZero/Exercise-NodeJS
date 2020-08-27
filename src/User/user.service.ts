import { Injectable, Inject, HttpStatus, HttpService, Res, Response, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreatePostDto } from './create-user-post.dto'

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {
    }

    

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }


    async getUser(_id: string){
        return await this.usersRepository.findOne({id: _id}).then(function(res){
            if(res){
                return res
            }
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
        })
        .catch(function(err){
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        });;
    }

    async createUser(_user: CreatePostDto){
        return await this.usersRepository.save(_user);
        // .then(function(res){
        //     // console.log(res);
        //     // return {
        //     //     "statusCode" : 200,
        //     //     'message': "Successfully delete user"
        //     // }
        //     return true;
        // })
        // .catch(function(err){
        //     // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);     
        //     return false;
        // });;
    }


    async updateUser(user: User) {
        return await this.usersRepository.update(user.id, user).then(function(res){
            // console.log(res);
            // return {
            //     "statusCode" : 200,
            //     'message': "Successfully delete user"
            // }
            return true;
        })
        .catch(function(err){
            // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);     
            return false;
        });
    }

    async deleteUser(user: string) {
        return await this.usersRepository.delete(user).then(function(res){
            // console.log(res);
            // return {
            //     "statusCode" : 200,
            //     'message': "Successfully delete user"
            // }
            return true;
        })
        .catch(function(err){
            return false;
            // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);     
        });;
    }
}
