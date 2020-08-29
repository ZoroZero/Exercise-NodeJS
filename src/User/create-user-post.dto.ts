import { IsEmail } from 'class-validator';

export class CreatePostDto{
    first_name: string;
    last_name: string;

    @IsEmail()
    email: string;

    // @IsUrl()
    avatar?: string; 
}