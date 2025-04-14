import { Repository } from 'typeorm';
import { Cuenta } from './entities/cuenta.entity';
export declare class CuentasService {
    private cuentasRepository;
    constructor(cuentasRepository: Repository<Cuenta>);
    create(cuenta: Cuenta): Promise<Cuenta>;
    findAll(): Promise<Cuenta[]>;
    remove(id: number): Promise<void>;
    update(cuenta: Cuenta): Promise<any>;
}
