"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const index_1 = require("./routes/index");
const ErrorHandlingMiddleware_1 = require("./middlewares/ErrorHandlingMiddleware");
dotenv_1.default.config({ path: path_1.default.join(__dirname, '/.env') });
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.resolve(__dirname, 'static')));
app.use((0, express_fileupload_1.default)({}));
app.use('/api', index_1.router);
app.use(ErrorHandlingMiddleware_1.errorHandlingMiidleware);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Working!!!' });
});
const start = async () => {
    try {
        await db_1.sequelize.authenticate();
        await db_1.sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
};
start();
//# sourceMappingURL=main.js.map