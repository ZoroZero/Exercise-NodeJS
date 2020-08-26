import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [ 
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //     host: 'localhost',
    //     port: 5432,
    //     username: 'postgres',
    //     password: 'An01597894561230',
    //     database: 'Test',
    //     entities: [
    //         __dirname + '/../**/*.entity{.ts,.js}',
    //     ],

    //     synchronize: true,
    // }),
    // UsersModule
    TypeOrmModule.forRoot(),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
