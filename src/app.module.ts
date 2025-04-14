import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GastosModule } from './entidades/gastos/gastos.module';
import { Gasto } from './entidades/gastos/gasto.entity';
import { CuentasModule } from './cuentas/cuentas.module';
import * as dotenv from 'dotenv';

dotenv.config();  // Carga las variables de entorno desde el archivo .env

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST, // Cambia por tu host
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: '',
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      entities: [Gasto], // Aquí colocas tus entidades
      synchronize: true,  // Esto hace que TypeORM sincronice las entidades con la base de datos
    }),
    GastosModule,
    CuentasModule
  ],
})
export class AppModule {}
