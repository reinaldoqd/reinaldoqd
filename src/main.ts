import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const UPDATE_DIRECT = 'Foi alterado diretamente';
Logger.log(UPDATE_DIRECT);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
