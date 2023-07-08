import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionHandler } from './utils/http-exception-handler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionHandler());
  await app.listen(3000);
}
bootstrap();
