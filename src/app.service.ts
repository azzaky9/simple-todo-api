import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @Get()
  async getHello() {
    return {
      message: 'Hello World!',
    };
  }
}
