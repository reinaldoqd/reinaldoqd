import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PRIMEIRA_ALTERACAO = 'Primeira alteração revisada';

Logger.log(PRIMEIRA_ALTERACAO);

const UPDATE_DIRECT = 'Foi alterado diretamente';

Logger.log(UPDATE_DIRECT);
const PRIMEIRA_ALTERACAO = 'Primeira alteração';
const SEGUNDA_ALTERACAO = 'Segunda alteração';

Logger.log(PRIMEIRA_ALTERACAO);
Logger.log(SEGUNDA_ALTERACAO);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
