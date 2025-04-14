import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { Cuenta } from './entities/cuenta.entity';

@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}

  @Post()
  create(@Body() cuenta: Cuenta): Promise<Cuenta> {  // Cambié usuario a cuenta
    return this.cuentasService.create(cuenta);
  }

  @Get()
  findAll(): Promise<Cuenta[]> {
    return this.cuentasService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.cuentasService.remove(id);
  }
}
