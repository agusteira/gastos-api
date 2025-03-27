import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Gasto } from './gasto.entity';
import { GastosService } from './gasto.service';

@Controller('gastos')
export class GastosController {  // Cambié el nombre del controlador a GastosController
  constructor(private readonly gastosServices: GastosService) {}

  @Post()
  create(@Body() gasto: Gasto): Promise<Gasto> {  // Cambié usuario a gasto
    return this.gastosServices.create(gasto);
  }

  @Get()
  findAll(): Promise<Gasto[]> {
    return this.gastosServices.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.gastosServices.remove(id);
  }
}
