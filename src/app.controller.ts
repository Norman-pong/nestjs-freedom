import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

    @Inject('custom_object')
    private readonly custom_object: {
      type: 'object';
      name: 'norman';
    },

    @Inject('custom_factory')
    private readonly custom_factory: {
      type: 'factory_object';
      name: string;
      age: number;
    },

    @Inject('custom_object_existing')
    private readonly custom_object_existing: typeof custom_object,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
