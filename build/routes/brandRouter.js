"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
const brandController_1 = require("../controllers/brandController");
exports.router.post('/', brandController_1.brandController.create);
exports.router.get('/', brandController_1.brandController.getAll);
//# sourceMappingURL=brandRouter.js.map