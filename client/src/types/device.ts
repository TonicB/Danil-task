export interface DeviceState {
  devices: any[];
  loading: boolean;
  error: null | string;
}

export enum DeviceActionTypes {
  FETCH_DEVICES = 'FETCH_DEVICES',
  FETCH_DEVICES_SUCCESS = 'FETCH_DEVICES_SUCCESS',
  FETCH_DEVICES_ERROR = 'FETCH_DEVICES_ERROR',
  CREATE_DEVICE = 'CREATE_DEVICE',
  CREATE_DEVICE_SUCCESS = 'CREATE_DEVICE_SUCCESS',
  CREATE_DEVICE_ERROR = 'CREATE_DEVICE_ERROR',
}


interface FetchDeviceAction {
  type: DeviceActionTypes.FETCH_DEVICES;
}
interface FetchDeviceSUCCESSAction {
  type: DeviceActionTypes.FETCH_DEVICES_SUCCESS;
  payload: any[];
}

interface FetchDeviceErrorAction {
  type: DeviceActionTypes.FETCH_DEVICES_ERROR;
  payload: string;
}

interface CreateDeviceAction {
  type: DeviceActionTypes.CREATE_DEVICE;
}
interface CreateDeviceSUCCESSAction {
  type: DeviceActionTypes.CREATE_DEVICE_SUCCESS;
  payload: any[];
}

interface CreateDeviceErrorAction {
  type: DeviceActionTypes.CREATE_DEVICE_ERROR;
  payload: string;
}

export type DeviceAction = FetchDeviceAction | FetchDeviceErrorAction | FetchDeviceSUCCESSAction | CreateDeviceAction | CreateDeviceSUCCESSAction |CreateDeviceErrorAction
