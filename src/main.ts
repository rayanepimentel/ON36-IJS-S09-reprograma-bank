import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogInterceptor } from './interceptors/log.interceptor';
import { Logger } from 'winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  //app.useGlobalInterceptors(new LogInterceptor());
  await app.listen(3000);
}
bootstrap();
