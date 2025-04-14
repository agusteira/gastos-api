import { CuentasService } from './cuentas.service';
import { Cuenta } from './entities/cuenta.entity';
export declare class CuentasController {
    private readonly cuentasService;
    constructor(cuentasService: CuentasService);
    create(cuenta: Cuenta): Promise<Cuenta>;
    findAll(): Promise<Cuenta[]>;
    remove(id: number): Promise<void>;
}
