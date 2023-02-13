/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UsersServiceService } from './usersservice.service';

@Module({
    imports: [],
    controllers: [],
    providers: [UsersServiceService],
})
export class UsersModuleModule { }
