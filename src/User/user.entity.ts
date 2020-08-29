import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity('User')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string; 

    @Column()
    first_name:string;

    @Column()
    last_name:string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    avatar:string;
}