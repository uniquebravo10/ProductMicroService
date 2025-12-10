import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { DatabaseModule } from 'database/database';
import { SchemaModule } from 'schema/schema';

@Module({
    imports:[DatabaseModule, SchemaModule],
    controllers:[OrdersController],
    providers:[OrdersService],
    exports:[OrdersService]
})
export class OrdersModule {}
