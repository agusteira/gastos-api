import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gasto } from './gasto.entity';


@Injectable()
export class GastosService {
  constructor(
    @InjectRepository(Gasto)
    private gastosRepository: Repository<Gasto>,
  ) {}

  create(gasto: Gasto): Promise<Gasto> {
    return this.gastosRepository.save(gasto);
  }

  findAll(): Promise<Gasto[]> {
    return this.gastosRepository.find();
  }

  /*findOne(id: number): Promise<Gasto> {
    return this.gastosRepository.findOne(id);
  }*/

  async remove(id: number): Promise<void> {
    await this.gastosRepository.delete(id);
  }

  async update(gasto: Gasto): Promise<any> {
    try {
      console.log(gasto)
      const result = await this.gastosRepository.update(gasto.id, gasto);
      if (result.affected === 0) {
        
        throw new Error('No se encontró el gasto con el ID proporcionado');
      }
      
      return result;
    } catch (error) {
      console.log(error.message)
      throw new Error(`Error al actualizar el gasto: ${error.message}`);
    }
  }
  
}
