import { Injectable } from '@nestjs/common';
import { UsersService } from './User/user.service';
import { UsersModule } from './User/user.module';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello';
  }
}
