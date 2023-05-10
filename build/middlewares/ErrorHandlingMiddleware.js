"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlingMiidleware = void 0;
const ApiErrors_1 = require("../error/ApiErrors");
function errorHandlingMiidleware(err, req, res, next) {
    if (err instanceof ApiErrors_1.ApiError) {
        return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: "Unexpected error" });
}
exports.errorHandlingMiidleware = errorHandlingMiidleware;
//# sourceMappingURL=ErrorHandlingMiddleware.js.map