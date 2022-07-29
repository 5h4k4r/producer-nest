import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMqService } from './rabbit-mq.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'rabbit-mq-module',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672/demo-vhost'],
          queue: 'demo-queue',
        },
      },
    ]),
  ],
  exports: [RabbitMqService],
  providers: [RabbitMqService],
})
export class RabbitMqModule { }
