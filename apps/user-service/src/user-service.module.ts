import { Module } from '@nestjs/common';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from 'database/database';
import { SchemaModule } from 'schema/schema';

@Module({
  imports: [UsersModule, DatabaseModule, SchemaModule],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule {}
