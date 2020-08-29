import { Injectable, UseFilters, Inject } from '@nestjs/common';
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
        return await this.usersRepository.findOne({id: _id});
    }

    async createUser(_user: CreatePostDto){
        return await this.usersRepository.save(_user);
    }


    async updateUser(user: User) {
        return await this.usersRepository.update(user.id, user);
    }

    async deleteUser(user: string) {
        return await this.usersRepository.delete(user);
    }
}
