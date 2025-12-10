import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name:"order",
      transport:Transport.TCP,
      options:{
        port:4000
      }
    },
    {
      name:"product",
      transport:Transport.TCP,
      options:{
        port:4001
      }
    },
    {
      name:"user",
      transport:Transport.TCP,
      options:{
        port:4002
      }
    }
  ])],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
