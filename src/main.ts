import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PRIMEIRA_ALTERACAO = 'Primeira alteração revisada';

Logger.log(PRIMEIRA_ALTERACAO);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
