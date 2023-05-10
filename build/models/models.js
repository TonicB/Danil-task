"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeBrand = exports.DeviceInfo = exports.Raiting = exports.Brand = exports.Type = exports.Device = exports.BascetDevice = exports.Bascet = exports.User = void 0;
const db_1 = require("./../db");
const sequelize_1 = require("sequelize");
exports.User = db_1.sequelize.define('user', {
    userId: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, unique: true },
    role: { type: sequelize_1.DataTypes.STRING, defaultValue: "USER" },
    password: { type: sequelize_1.DataTypes.STRING }
});
exports.Bascet = db_1.sequelize.define('bascet', {
    bascetId: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false }
});
exports.BascetDevice = db_1.sequelize.define('bascet_device', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.Device = db_1.sequelize.define('device', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    deviceId: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    name: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    price: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    raiting: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0 },
    img: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
});
exports.Type = db_1.sequelize.define('type', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
});
exports.Brand = db_1.sequelize.define('brand', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
});
exports.Raiting = db_1.sequelize.define('raiting', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
});
exports.DeviceInfo = db_1.sequelize.define('device_info', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description: { type: sequelize_1.DataTypes.STRING, allowNull: false },
});
exports.TypeBrand = db_1.sequelize.define('type_brand', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.User.hasOne(exports.Bascet);
exports.Bascet.belongsTo(exports.User);
exports.User.hasMany(exports.Raiting);
exports.Raiting.belongsTo(exports.User);
exports.Bascet.hasMany(exports.BascetDevice);
exports.BascetDevice.belongsTo(exports.Bascet);
exports.Type.hasMany(exports.Device);
exports.Device.belongsTo(exports.Type);
exports.Brand.hasMany(exports.Device);
exports.Device.belongsTo(exports.Brand);
exports.Device.hasMany(exports.Raiting);
exports.Raiting.belongsTo(exports.Device);
exports.Device.hasMany(exports.BascetDevice);
exports.BascetDevice.belongsTo(exports.Device);
exports.Device.hasMany(exports.DeviceInfo, { as: 'info' });
exports.DeviceInfo.belongsTo(exports.Device);
exports.Type.belongsToMany(exports.Brand, { through: exports.TypeBrand });
exports.Brand.belongsToMany(exports.Device, { through: exports.TypeBrand });
//# sourceMappingURL=models.js.map