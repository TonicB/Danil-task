"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const typeController_1 = require("../controllers/typeController");
exports.router = (0, express_1.Router)();
exports.router.post('/', typeController_1.typeController.create);
exports.router.get('/', typeController_1.typeController.getAll);
//# sourceMappingURL=typeRouter.js.map