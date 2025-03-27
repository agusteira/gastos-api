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

  create(usuario: Gasto): Promise<Gasto> {
    return this.gastosRepository.save(usuario);
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
}
