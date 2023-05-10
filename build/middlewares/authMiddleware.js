"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiidleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiidleware(req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            res.status(401).json({ message: "Не авторизован" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch (e) {
        res.status(401).json({ message: "Не авторизован" });
    }
}
exports.authMiidleware = authMiidleware;
//# sourceMappingURL=authMiddleware.js.map