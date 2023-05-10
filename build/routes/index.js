"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const brandRouter_1 = require("./brandRouter");
const userRouter_1 = require("./userRouter");
const deviceRouter_1 = require("./deviceRouter");
const typeRouter_1 = require("./typeRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/user', userRouter_1.router);
exports.router.use('/type', typeRouter_1.router);
exports.router.use('/brand', brandRouter_1.router);
exports.router.use('/device', deviceRouter_1.router);
//# sourceMappingURL=index.js.map