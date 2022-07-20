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
          urls: ['amqp://john123:123456@localhost:5672/demo-vhost'],
          queue: 'producer-consumer',
        },
      },
    ]),
  ],
  exports: [RabbitMqService],
  providers: [RabbitMqService],
})
export class RabbitMqModule { }
