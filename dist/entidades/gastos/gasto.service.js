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
exports.GastosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const gasto_entity_1 = require("./gasto.entity");
let GastosService = class GastosService {
    gastosRepository;
    constructor(gastosRepository) {
        this.gastosRepository = gastosRepository;
    }
    create(gasto) {
        return this.gastosRepository.save(gasto);
    }
    findAll() {
        return this.gastosRepository.find();
    }
    async remove(id) {
        await this.gastosRepository.delete(id);
    }
    async update(gasto) {
        try {
            console.log(gasto);
            const result = await this.gastosRepository.update(gasto.id, gasto);
            if (result.affected === 0) {
                throw new Error('No se encontró el gasto con el ID proporcionado');
            }
            return result;
        }
        catch (error) {
            console.log(error.message);
            throw new Error(`Error al actualizar el gasto: ${error.message}`);
        }
    }
};
exports.GastosService = GastosService;
exports.GastosService = GastosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gasto_entity_1.Gasto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GastosService);
//# sourceMappingURL=gasto.service.js.map