import { NestFactory } from '@nestjs/core';
import { messagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(messagesModule);
  await app.listen(3000);
}
bootstrap();
