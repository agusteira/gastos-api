import { Repository } from 'typeorm';
import { Gasto } from './gasto.entity';
export declare class GastosService {
    private gastosRepository;
    constructor(gastosRepository: Repository<Gasto>);
    create(usuario: Gasto): Promise<Gasto>;
    findAll(): Promise<Gasto[]>;
    remove(id: number): Promise<void>;
}
