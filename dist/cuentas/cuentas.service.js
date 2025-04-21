"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cuenta_entity_1 = require("./entities/cuenta.entity");
let CuentasService = class CuentasService {
    cuentasRepository;
    constructor(cuentasRepository) {
        this.cuentasRepository = cuentasRepository;
    }
    create(cuenta) {
        return this.cuentasRepository.save(cuenta);
    }
    findAll() {
        console.log("Obteniendo objetos");
        return this.cuentasRepository.find();
    }
    async remove(id) {
        console.log("Eliminando objeto");
        await this.cuentasRepository.delete(id);
        console.log("Objeto eliminado");
    }
    async update(cuenta) {
        try {
            const result = await this.cuentasRepository.update(cuenta.id, cuenta);
            if (result.affected === 0) {
                throw new Error('No se encontró el cuenta con el ID proporcionado');
            }
            return result;
        }
        catch (error) {
            throw new Error(`Error al actualizar el cuenta: ${error.message}`);
        }
    }
};
exports.CuentasService = CuentasService;
exports.CuentasService = CuentasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cuenta_entity_1.Cuenta)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CuentasService);
//# sourceMappingURL=cuentas.service.js.map