import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {

    @PrimaryGeneratedColumn("uuid")
    Id: string; 

    @Column()
    Username:string;

    @Column()
    Password:string;

    @Column() 
    FirstName: string;

    @Column()
    LastName:string;

    @Column() 
    DoB: Date;
}