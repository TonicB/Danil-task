"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const ApiErrors_1 = require("../error/ApiErrors");
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("../models/models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid = __importStar(require("uuid"));
const generateJwt = (id, email, role) => {
    return jsonwebtoken_1.default.sign({ id: id, email: email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
};
class UserController {
    async registration(req, res, next) {
        const { email, role, password } = req.body;
        if (!email || !password) {
            return next(ApiErrors_1.ApiError.badRequest('Некорректный email или password'));
        }
        const candidate = await models_1.User.findOne({ where: { email } });
        if (candidate) {
            return next(ApiErrors_1.ApiError.badRequest('Пользователь с таким email уже существует'));
        }
        const hashPassword = await bcrypt_1.default.hash(password, 5);
        const userId = uuid.v4();
        const user = await models_1.User.create({ userId, email, role, password: hashPassword });
        const bascet = await models_1.Bascet.create({ bascetId: userId });
        const token = jsonwebtoken_1.default.sign({ id: userId, email: email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
        return res.json({ token });
    }
    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await models_1.User.findOne({ where: { email } });
        if (!user) {
            return next(ApiErrors_1.ApiError.internal('Пользователь не найден'));
        }
        const comparePassword = bcrypt_1.default.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiErrors_1.ApiError.internal('Указан неверный пароль'));
        }
        const token = jsonwebtoken_1.default.sign({ id: user.userId, email: email, role: user.role }, process.env.SECRET_KEY, { expiresIn: '24h' });
        return res.json({ token });
    }
    async check(req, res, next) {
        const token = jsonwebtoken_1.default.sign({ id: req.user.userId, email: req.user.email, role: req.user.role }, process.env.SECRET_KEY, { expiresIn: '24h' });
        return res.json({ token });
    }
}
exports.userController = new UserController();
//# sourceMappingURL=userController.js.map