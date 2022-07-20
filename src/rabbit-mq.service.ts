import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class RabbitMqService {
  constructor(
    @Inject('rabbit-mq-module') private readonly client: ClientProxy,
  ) { }

  public send(pattern: string, data: any): Promise<any> {
    return this.client.send(pattern, data).toPromise();
  }
}
