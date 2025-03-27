import { Gasto } from './gasto.entity';
import { GastosService } from './gasto.service';
export declare class GastosController {
    private readonly gastosServices;
    constructor(gastosServices: GastosService);
    create(gasto: Gasto): Promise<Gasto>;
    findAll(): Promise<Gasto[]>;
    remove(id: number): Promise<void>;
}
