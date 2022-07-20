import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMqService } from './rabbit-mq.service';
import { take } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMqService: RabbitMqService,
  ) { }

  @Get()
  async getHello(): Promise<string> {
    const pendingOperations = Array.from(new Array(5)).map((_, index) =>
      this.rabbitMqService.send('rabbit-mq-producer', {
        message: this.appService.getHello() + index,
      }),
    );
    Promise.all(pendingOperations);

    return 'Message sent to the queue!';
  }
}
