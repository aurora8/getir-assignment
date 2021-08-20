import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  
  // enable cors with default settings
  app.enableCors();

  // validation pipe intercepts incoming entity objects for validation
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  // open Api/swagger
  const config = new DocumentBuilder()
    .setTitle('Getir Assignment Api')
    .setDescription('Assignment API')
    .setVersion('1.0')
    .addTag('getir-api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
