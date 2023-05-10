import {sequelize} from './../db'
import { DataTypes, Model, InferAttributes, InferCreationAttributes} from "sequelize";

export interface Device extends Model< 
    InferAttributes<Device>, 
    InferCreationAttributes<Device> 
  > { 
  deviceId: string; 
  name: string; 
  price: string; 
  img: string; 
  }

  export interface Cart extends Model<
  InferAttributes<Cart>, 
  InferCreationAttributes<Cart>
  > {
    deviceId: string;
  }

export const Device = sequelize.define('device', {
  deviceId: { type: DataTypes.STRING, unique: true, allowNull: false } ,
  name: { type: DataTypes.STRING, unique: true, allowNull: false } ,
  price: { type: DataTypes.INTEGER, allowNull: false } ,
  img: { type: DataTypes.STRING, unique: true, allowNull: false} ,
})

export const Cart = sequelize.define('cart', {
  deviceId: { type: DataTypes.STRING, allowNull: false}
})