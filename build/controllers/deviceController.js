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
exports.deviceController = void 0;
const path_1 = __importDefault(require("path"));
const uuid = __importStar(require("uuid"));
const models_1 = require("../models/models");
const ApiErrors_1 = require("../error/ApiErrors");
class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId } = req.body;
            let { info } = req.body;
            const { img } = req.files;
            const filname = uuid.v4() + ".jpg";
            img.mv(path_1.default.resolve(__dirname, '..', 'static', filname));
            const deviceId = uuid.v4();
            const device = await models_1.Device.create({ deviceId, name, price, brandId, typeId, img: filname });
            if (info) {
                info = JSON.parse(info);
                info.forEach((el) => {
                    models_1.DeviceInfo.create({
                        title: el.title,
                        description: el.description,
                        deviceId: deviceId
                    });
                });
            }
            return res.json(device);
        }
        catch (e) {
            next(ApiErrors_1.ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res) {
        const { brandId, typeId } = req.query;
        let devices;
        if (!brandId && !typeId) {
            devices = await models_1.Device.findAll();
        }
        if (brandId && !typeId) {
            devices = await models_1.Device.findAll({ where: { brandId } });
        }
        if (!brandId && typeId) {
            devices = await models_1.Device.findAll({ where: { typeId } });
        }
        if (brandId && typeId) {
            devices = await models_1.Device.findAll({ where: { typeId, brandId } });
        }
        return res.json(devices);
    }
    async getOne(req, res) {
        const { id } = req.params;
        const device = await models_1.Device.findOne({
            where: { id },
            include: [{ model: models_1.DeviceInfo, as: "info" }]
        });
        return res.json(device);
    }
}
exports.deviceController = new DeviceController();
//# sourceMappingURL=deviceController.js.map