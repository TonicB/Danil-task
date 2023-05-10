"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
exports.router = (0, express_1.Router)();
const authMiddleware_1 = require("../middlewares/authMiddleware");
exports.router.post('/registration', userController_1.userController.registration);
exports.router.post('/login', userController_1.userController.login);
exports.router.get('/auth', authMiddleware_1.authMiidleware, userController_1.userController.check);
//# sourceMappingURL=userRouter.js.map