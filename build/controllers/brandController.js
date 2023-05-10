"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandController = void 0;
const models_1 = require("../models/models");
class BrandController {
    async create(req, res) {
        const { name } = req.body;
        const brand = await models_1.Brand.create({ name });
        return res.json(brand);
    }
    async getAll(req, res) {
        const brands = await models_1.Brand.findAll();
        return res.json(brands);
    }
}
exports.brandController = new BrandController();
//# sourceMappingURL=brandController.js.map