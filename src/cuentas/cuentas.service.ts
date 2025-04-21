import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from './entities/cuenta.entity';

@Injectable()
export class CuentasService {
  constructor(
      @InjectRepository(Cuenta)
      private cuentasRepository: Repository<Cuenta>,
    ) {}

   create(cuenta: Cuenta): Promise<Cuenta> {
      return this.cuentasRepository.save(cuenta);
    }
  
    findAll(): Promise<Cuenta[]> {
      console.log("Obteniendo objetos")
      return this.cuentasRepository.find();
    }
  
    /*findOne(id: number): Promise<cuenta> {
      return this.cuentasRepository.findOne(id);
    }*/
  
    async remove(id: number): Promise<void> {
      console.log("Eliminando objeto")
      await this.cuentasRepository.delete(id);
      console.log("Objeto eliminado")
    }
  
    async update(cuenta: Cuenta): Promise<any> {
      try {
        const result = await this.cuentasRepository.update(cuenta.id, cuenta);
        if (result.affected === 0) {
          throw new Error('No se encontró el cuenta con el ID proporcionado');
        }
        return result;
      } catch (error) {
        throw new Error(`Error al actualizar el cuenta: ${error.message}`);
      }
    }
}
