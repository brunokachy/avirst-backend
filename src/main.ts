import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //http://localhost:3000/api
  //http://localhost:3000/api-json
  const config = new DocumentBuilder()
    .setTitle('Avirst Service')
    .setDescription('The API documenation of Avirst Service')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

    const options: SwaggerDocumentOptions =  {
      operationIdFactory: (
        controllerKey: string,
        methodKey: string
      ) => methodKey
    };
    
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
