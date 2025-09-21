import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['zaefaf'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Assure that there are only needed properties in validation objects
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
