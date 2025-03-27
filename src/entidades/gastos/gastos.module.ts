import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gasto } from './gasto.entity';  // Asegúrate de importar la entidad Gasto
import { GastosService } from './gasto.service';
import { GastosController } from './gastos.controller';  // Asegúrate de importar el controlador correcto

@Module({
  imports: [TypeOrmModule.forFeature([Gasto])],
  controllers: [GastosController],  // Asegúrate de registrar el controlador aquí
  providers: [GastosService],
})
export class GastosModule {}
