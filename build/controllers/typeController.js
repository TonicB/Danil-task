"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeController = void 0;
const models_1 = require("../models/models");
class TypeController {
    async create(req, res) {
        const { name } = req.body;
        const type = await models_1.Type.create({ name });
        return res.json(type);
    }
    async getAll(req, res) {
        const types = await models_1.Type.findAll();
        return res.json(types);
    }
}
exports.typeController = new TypeController();
//# sourceMappingURL=typeController.js.map