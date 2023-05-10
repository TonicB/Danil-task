import {sequelize} from './../db'
import { DataTypes, Model, InferAttributes, InferCreationAttributes} from "sequelize";

export const User = sequelize.define('user', {
  userId: { type: DataTypes.STRING, unique: true, allowNull: false } ,
  email: { type: DataTypes.STRING, unique: true },
  role: {type: DataTypes.STRING, defaultValue: "USER"},
  password: { type: DataTypes.STRING}
})

export interface UserInstance extends Model< 
    InferAttributes<UserInstance>, 
    InferCreationAttributes<UserInstance> 
  > { 
  userId: string; 
  email: string; 
  password: string; 
  role: string; 
  }

export const Bascet = sequelize.define('bascet', {
  bascetId: { type: DataTypes.STRING, unique: true, allowNull: false }
})

export interface Bascet extends Model< 
    InferAttributes<Bascet>, 
    InferCreationAttributes<Bascet> 
  > { 
  bascetId: string; 
  }


export const BascetDevice = sequelize.define('bascet_device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true } ,
})

export interface Device extends Model< 
    InferAttributes<Device>, 
    InferCreationAttributes<Device> 
  > { 
  id: string; 
  deviceId: string; 
  name: string; 
  price: string; 
  rating: string; 
  img: string; 
  }

export const Device = sequelize.define('device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true } ,
  deviceId: { type: DataTypes.STRING, unique: true, allowNull: false } ,
  name: { type: DataTypes.STRING, unique: true, allowNull: false } ,
  price: { type: DataTypes.INTEGER, allowNull: false } ,
  raiting: { type: DataTypes.INTEGER, defaultValue: 0 } ,
  img: { type: DataTypes.STRING, unique: true, allowNull: false} ,
})

export const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true } ,
  name: { type: DataTypes.STRING, unique: true, allowNull: false } ,
})

export const Brand = sequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true } ,
  name: { type: DataTypes.STRING, unique: true, allowNull: false } ,
})

export const Raiting = sequelize.define('raiting', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true } ,
  name: { type: DataTypes.INTEGER, allowNull: false } ,
})

export const DeviceInfo = sequelize.define('device_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true } ,
  title: { type: DataTypes.STRING, allowNull: false } ,
  description: { type: DataTypes.STRING, allowNull: false } ,
})

export const TypeBrand = sequelize.define('type_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true } ,
})

User.hasOne(Bascet)
Bascet.belongsTo(User)

User.hasMany(Raiting)
Raiting.belongsTo(User)

Bascet.hasMany(BascetDevice)
BascetDevice.belongsTo(Bascet)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Raiting)
Raiting.belongsTo(Device)

Device.hasMany(BascetDevice)
BascetDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'} )
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Device, {through: TypeBrand})
