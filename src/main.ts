import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'express-handlebars';
import * as session from 'express-session';
import * as passport from 'passport';
import * as bodyParser from 'body-parser';



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine(
    'hbs',
    hbs({
      extname: 'hbs',
      defaultLayout: 'layout_main',
      layoutsDir: join(__dirname, '..', 'views', 'layouts'),
      partialsDir: join(__dirname, '..', 'views', 'partials'),
    }),
  );
  app.setViewEngine('hbs');

  // initialize session
  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

   // Add body-parser middleware
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));

  await app.listen(3001);
}
bootstrap();