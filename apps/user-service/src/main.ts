import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UserServiceModule,{
    transport:Transport.TCP,
    options:{
      port:4002
    }
  });
  console.log("User service running in portno 4002");

  await app.listen();
}
bootstrap();
