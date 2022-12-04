import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Netflix')
    .setVersion('Aplicação de filmes e series')
    .setVersion('1.0.0')
    .addTag('Status')
    .addTag('Movies')
    .addTag('User')
    .addTag('Admin')
    .addTag('Netflix')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
