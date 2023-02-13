/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AuthServiceService } from './authservice.service';

@Module({
    imports: [],
    controllers: [],
    providers: [AuthServiceService],
})
export class AuthModuleModule {}
