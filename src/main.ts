import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {
      origin: '*', // Permite todos los orígenes, ajusta según tu configuración
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Asegúrate de permitir DELETE
    }
  );
  
  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Mi API')
    .setDescription('Documentación de la API de ejemplo')
    .setVersion('1.0')
    .addTag('gastos') // Puedes agregar más tags si lo deseas
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' es la URL donde accederás a la documentación

  await app.listen(3000); // O el puerto que estés usando
}
bootstrap();
