import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string; 

    @Column()
    first_name:string;

    @Column()
    last_name:string;

    @Column() 
    email: string;

    @Column()
    avatar:string;
}