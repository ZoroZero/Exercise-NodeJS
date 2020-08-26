
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreatePostDto } from './create-user-post.dto'

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {
    }

    

    async getUsers(): Promise<User[]> {
        // return await this.usersRepository.query(`SELECT * FROM "User"`);

        return await this.usersRepository.find();
    }


    async getUser(_id: string){
        // return await this.usersRepository.query(`SELECT * FROM "User" WHERE "Id" = '${_id.toString()}'`);
        const user = await this.usersRepository.findOne({Id: _id});
        return user;
    }

    async createUser(_user: CreatePostDto){
        // return await this.usersRepository.query(`SELECT * FROM "User" WHERE "Id" = '${_user.Id}'`);
        await this.usersRepository.save(_user);
        return true;
    }

    // async getUser(_id: number): Promise<User[]> {
    //     return await this.usersRepository.find({
    //         select: ["fullName", "birthday", "isActive"],
    //         where: [{ "id": _id }]
    //     });
    // }

    async updateUser(user: User) {
        return await this.usersRepository.update(user.Id, user)
        // return await this.usersRepository.save(user);
    }

    async deleteUser(user: string) {
        return await this.usersRepository.delete(user);
    }
}
