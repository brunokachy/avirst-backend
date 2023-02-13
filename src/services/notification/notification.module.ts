/*
https://docs.nestjs.com/modules
*/

import { Global, Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { SMSService } from './sms.service';

@Global()
@Module({
    imports: [],
    controllers: [],
    providers: [SMSService, EmailService],
    exports: [SMSService, EmailService]
})
export class NotificationModule {}
