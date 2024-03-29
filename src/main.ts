import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PRIMEIRA_ALTERACAO = 'Primeira alteração revisada';
Logger.log(PRIMEIRA_ALTERACAO);

const UPDATE_DIRECT = 'Foi alterado diretamente';
Logger.log(UPDATE_DIRECT);

const SEGUNDA_ALTERACAO = 'Segunda alteração';
Logger.log(SEGUNDA_ALTERACAO);

const TERCEIRA_ALTERACAO = 'Terceira alteração';
Logger.log(TERCEIRA_ALTERACAO);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
