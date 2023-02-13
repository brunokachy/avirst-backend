import { UsersModuleModule } from './services/auth/usersmodule.module';
import { AuthModuleModule } from './services/auth/authmodule.module';
import { NotificationModule } from './services/notification/notification.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UsersModuleModule,
    AuthModuleModule,
    NotificationModule,
    MongooseModule.forRoot('mongodb://localhost:27005', { dbName: 'avirst' }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
