import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session');

export const setupApp = (app: any) => {
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
};
