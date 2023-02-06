import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.RMQ,
  //     options: {
  //       urls: ['amqp://localhost:5672'],
  //       queue: 'books_queue',
  //       queueOptions: {
  //         durable: false,
  //       },
  //     },
  //   },
  // );

  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.MQTT,
  //   options: {
  //     url: 'mqtt://localhost:1883',
  //   },
  // })
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
