"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const deviceController_1 = require("../controllers/deviceController");
exports.router = (0, express_1.Router)();
exports.router.post('/', deviceController_1.deviceController.create);
exports.router.get('/', deviceController_1.deviceController.getAll);
exports.router.get('/:id', deviceController_1.deviceController.getOne);
//# sourceMappingURL=deviceRouter.js.map