import { Device } from "../../../src/models/models";

export interface CartDeviceState {
  cartDevices: any[];
  loading: boolean;
  error: null | string;
}

export enum CartDeviceActionTypes {
  FETCH_CART_DEVICES = 'FETCH_CART_DEVICES',
  FETCH_CART_DEVICES_SUCCESS = 'FETCH_CART_DEVICES_SUCCESS',
  FETCH_CART_DEVICES_ERROR = 'FETCH_CART_DEVICES_ERROR',
  ADD_CART_DEVICE = 'ADD_CART_DEVICE',
  ADD_CART_DEVICE_SUCCESS = 'ADD_CART_DEVICE_SUCCESS',
  ADD_CART_DEVICE_ERROR = 'ADD_CART_DEVICE_ERROR',
}


interface FetchCartDeviceAction {
  type: CartDeviceActionTypes.FETCH_CART_DEVICES;
}
interface FetchCartDeviceSUCCESSAction {
  type: CartDeviceActionTypes.FETCH_CART_DEVICES_SUCCESS;
  payload: any[];
}

interface FetchCartDeviceErrorAction {
  type: CartDeviceActionTypes.FETCH_CART_DEVICES_ERROR;
  payload: string;
}

interface AddCartDeviceAction {
  type: CartDeviceActionTypes.ADD_CART_DEVICE;
}
interface AddCartDeviceSUCCESSAction {
  type: CartDeviceActionTypes.ADD_CART_DEVICE_SUCCESS;
  payload: Device;
}

interface AddCartDeviceErrorAction {
  type: CartDeviceActionTypes.ADD_CART_DEVICE_ERROR;
  payload: string;
}

export type CartDeviceAction = FetchCartDeviceAction | FetchCartDeviceErrorAction | FetchCartDeviceSUCCESSAction | AddCartDeviceAction | AddCartDeviceSUCCESSAction |AddCartDeviceErrorAction
