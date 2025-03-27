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
exports.GastosController = void 0;
const common_1 = require("@nestjs/common");
const gasto_entity_1 = require("./gasto.entity");
const gasto_service_1 = require("./gasto.service");
let GastosController = class GastosController {
    gastosServices;
    constructor(gastosServices) {
        this.gastosServices = gastosServices;
    }
    create(gasto) {
        return this.gastosServices.create(gasto);
    }
    findAll() {
        return this.gastosServices.findAll();
    }
    remove(id) {
        return this.gastosServices.remove(id);
    }
};
exports.GastosController = GastosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gasto_entity_1.Gasto]),
    __metadata("design:returntype", Promise)
], GastosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GastosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GastosController.prototype, "remove", null);
exports.GastosController = GastosController = __decorate([
    (0, common_1.Controller)('gastos'),
    __metadata("design:paramtypes", [gasto_service_1.GastosService])
], GastosController);
//# sourceMappingURL=gastos.controller.js.map