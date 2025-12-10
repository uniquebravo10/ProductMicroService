import { NestFactory } from '@nestjs/core';
import { OrderServiceModule } from './order-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(OrderServiceModule,{
    transport: Transport.TCP,
    options:{
      port:4000,
    }
  });
  console.log("Order service running in portno 4000");
  await app.listen();
}
bootstrap();

