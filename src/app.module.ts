import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
    {
      provide: 'custom_object',
      useValue: {
        type: 'object',
        name: 'norman',
      },
    },
    {
      provide: 'custom_factory',
      useFactory() {
        return {
          type: 'factory_object',
          name: 'norman',
          age: 18,
        };
      },
    },
    {
      provide: 'custom_object_existing',
      useExisting: 'custom_object',
    },
  ],
})
export class AppModule {}
